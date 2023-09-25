# Selldone Core

* **Mode:** 🌍 Public
* **Use case:** Fundamental models, types and functions to work with Selldone and create app for both storefront or backoffice.

Welcome to Selldone Core, the foundational JavaScript/TypeScript library for Selldone. This repository provides essential utilities, models, and types that power the Selldone ecosystem.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [License](#license)

## Features

- **gapi**: General-purpose APIs for accessing core functionalities like available currencies, pricing, and more.
- **models**: Asset models defining the core entities in the Selldone paradigm such as shops, products, and vendors.
- **helpers**: A collection of utility functions to streamline operations.
- **enums**: Enumerations used throughout the Selldone ecosystem.
- **types**: Explicit type definitions for frontend applications.

## Installation

To install Selldone Core in your project, use the following command:

```bash
npm install selldone/core --save
```

## Usage

Here's a basic example to get you started:

```javascript
import { SelldoneCore } from "../../core/SelldoneCore";

SelldoneCore.Setup();
```


## Contribution

We welcome contributions! If you find a bug or have a feature request, please open an issue. If you'd like to contribute code, please fork the repository and submit a pull request.


## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

1. The Software is provided "as is", without warranty of any kind, express or implied.
2. Any application developed using this package and associated with Selldone® must include an acknowledgment stating "Powered by Selldone®" in its copyright or about section.
3. Redistribution of the Software or its derivatives, whether in source or binary form, must reproduce the above copyright notice, this list of conditions, and the following disclaimer in the documentation and/or other materials provided with the distribution.

This license allows the use of the Software for commercial and non-commercial purposes. It does not grant rights to use the name, trademark, or symbols of Selldone® beyond the requirements stated above.

## Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

