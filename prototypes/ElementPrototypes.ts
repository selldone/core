/**
 * Extends the HTMLTextAreaElement prototype to provide a method to insert text at the current caret position.
 */

interface HTMLTextAreaElement {
  /**
   * Inserts the given text at the current caret position in the textarea.
   * Supports both modern browsers and older versions of IE.
   *
   * @param {string} text The text to be inserted.
   * @returns {string} The updated value of the textarea.
   */
  insertAtCaret(text: string): string;
}

HTMLTextAreaElement.prototype.insertAtCaret = function (text: string): string {
  text = text || "";

  // @ts-ignore
  if (document.selection) {
    // IE
    this.focus();
    // @ts-ignore
    const sel = document.selection.createRange();
    sel.text = text;
    return text;
  } else if (typeof this.selectionStart === "number") {
    // Modern browsers
    const startPos = this.selectionStart;
    const endPos = this.selectionEnd;

    this.value =
      this.value.substring(0, startPos) +
      text +
      this.value.substring(endPos, this.value.length);

    this.selectionStart = startPos + text.length;
    this.selectionEnd = startPos + text.length;

    return this.value;
  } else {
    // Fallback for textareas that don't support selection range
    this.value += text;
    return this.value;
  }
};

interface HTMLElement {
  insertAtCaret(text: string): string;
}
/**
 * Inserts the provided text at the caret position. If there's a text selection,
 * this function will replace the selected text with the provided text.
 *
 * @param this - Represents the HTML element.
 * @param text - The text to be inserted.
 *
 * @returns - The inserted text or the innerHTML of the element if the insertion fails.
 */
HTMLElement.prototype.insertAtCaret =
  HTMLParagraphElement.prototype.insertAtCaret = function (
    this: HTMLElement | HTMLParagraphElement,
    text: string
  ): string {
    text = text || "";

    if (document.getSelection) {
      // Modern browsers.
      const sel = document.getSelection();
      if (sel?.getRangeAt && sel.rangeCount) {
        const range = sel.getRangeAt(0);
        range.deleteContents();

        // Add new content to the selection range.
        let lastNode: Node | null = null;
        const list = text.split("\n").reverse(); // Add last to first! (insertNode)

        for (let i = 0; i < list.length; i++) {
          const l = list[i];
          const node = document.createTextNode(l);
          range.insertNode(node);

          if (i < list.length - 1) {
            const nodeBr = document.createElement("br");
            range.insertNode(nodeBr);
          }

          lastNode = node;
        }

        const nRange = new Range();
        nRange.setStartAfter(lastNode as Node);
        nRange.setEndAfter(lastNode as Node);
        sel.removeAllRanges();
        sel.addRange(nRange);

        return "";
      }
      return this.innerHTML;
    }

    // For older browsers (like IE).
    else {
      // @ts-ignore
      if (document.selection) {
        this.focus();
        // @ts-ignore
        const sel = document.selection.createRange();
        sel.text = text;
        return text;
      } else {
        this.innerHTML += text;
        return this.innerHTML;
      }
    }
  };

interface Document {
  selectionAddTag(
    this: Document,
    type: string,
    oppositeType: string | null
  ): void;

  selectionSetStyle(
    this: Document,
    property: keyof CSSStyleDeclaration,
    value: string
  ): void;
}

/**
 * Wraps the currently selected text in the browser with a specified tag.
 * If the surrounding operation fails, it tries to manually insert the content with the tag.
 *
 * @this - Represents the Document object.
 * @param type - The type of tag to wrap the selected content with.
 * @param oppositeType - An optional tag type to be considered, though it's currently unused in the function.
 */
Document.prototype.selectionAddTag = function (
  this: Document,
  type: string,
  oppositeType: string | null = null
): void {
  console.log("selectionAddTag", type);

  if (!document.getSelection) return;
  const sel = document.getSelection();
  if (!sel?.getRangeAt || !sel.rangeCount) return;

  for (let i = 0; i < sel.rangeCount; i++) {
    const range = sel.getRangeAt(i);

    // Ensure the selection is within an editable context
    if (
      !(range.commonAncestorContainer as HTMLElement).isContentEditable &&
      !range.commonAncestorContainer.parentElement?.isContentEditable
    ) {
      continue;
    }

    const newParent = document.createElement(type);

    try {
      range.surroundContents(newParent);
    } catch (e) {
      // Handle the bug where surroundContents might fail under certain conditions
      const str = range.toString();
      range.deleteContents();
      newParent.innerText = str;
      range.insertNode(newParent);
    }
  }
};

/*
Not tested!
 */

/**
 * Adds the ability to set a style for the selected text within the document.
 *
 * @param property - The CSS property to be set.
 * @param value - The value to be set for the given CSS property.
 */
Document.prototype.selectionSetStyle = function (
  this: Document,
  property: keyof CSSStyleDeclaration,
  value: string
): void {
  if (!document.getSelection) return;

  const sel = document.getSelection();
  if (!sel?.getRangeAt || !sel.rangeCount) return;

  for (let i = 0; i < sel.rangeCount; i++) {
    const range = sel.getRangeAt(i);

    // Only editable:
    if (
      !(range.commonAncestorContainer as HTMLElement).isContentEditable &&
      !range.commonAncestorContainer.parentElement?.isContentEditable
    )
      continue;

    const clone = range.cloneContents();

    const fragment = new DocumentFragment();

    // @ts-ignore
    function process(content_raw: Node) {
      const content = content_raw.cloneNode(true); // Fix browser bug that not return all nodes in childNodes

      const parent = sel?.anchorNode?.parentNode;

      if (!content.textContent) {
        return;
      }

      let newContent = content;

      // Prevent wrap around text:
      if (
        parent &&
        parent.textContent?.trim() === newContent.textContent?.trim()
      ) {
        // @ts-ignore
        (parent as HTMLElement).style[property] = value;
        fragment.appendChild(content);

        return;
      }

      // Wrap span if node is not an element:
      if (content.nodeType !== Node.ELEMENT_NODE) {
        newContent = document.createElement("span");
        newContent.appendChild(content);
      }

      // @ts-ignore
      (newContent as HTMLElement).style[property] = value;

      fragment.appendChild(newContent);
    }

    clone.childNodes.forEach(process);

    range.deleteContents();
    range.insertNode(fragment);
  }
};
