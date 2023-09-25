export class SpecHelper {
  static CONVERT_SPEC_JSON_TO_ARRAY(spec_json, spec_order) {
    //    console.log('CONVERT_SPEC_JSON_TO_ARRAY', spec_json)

    if (Array.isArray(spec_json)) return spec_json; // Old version!

    let spec_list = [];
    for (let key in spec_json) {
      let value = spec_json[key];

      if (Array.isArray(value)) {
        let array = [key];
        spec_list.push(array.concat(value));
      } else {
        if (value === "group") {
          spec_list.push({ group: key });
        }
      }
    }

    // Order the list:
    if (spec_order)
      spec_list = spec_list.sort(function(a, b) {
        let val_a = Array.isArray(a) ? a[0] : a.group;
        let val_b = Array.isArray(b) ? b[0] : b.group;

        return spec_order.indexOf(val_a) - spec_order.indexOf(val_b);
      });
    //console.log("spec_list", spec_list);

    return spec_list;
  }

  static CONVERT_SPEC_ARRAY_TO_JSON(spec_list) {
    let spec_json = {};
    let spec_order = [];

    spec_list.forEach(item => {
      if (Array.isArray(item)) {
        if (item.length > 0) {
          let list = [];
          for (let i = 1; i < item.length; i++) {
            list.push(item[i]);
          }
          spec_json[item[0]] = list;
          spec_order.push(item[0]);
        }
      } else {
        if (item.group) {
          spec_json[item.group] = "group";
          spec_order.push(item.group);
        }
      }
    });
    //  console.log('spec_json', spec_json)
    // console.log('spec_order', spec_order)

    return { spec_json, spec_order };
  }
}
