![Selldone Official Storefront App](_docs/images/banner-core.jpg)

![Selldone](https://img.shields.io/badge/type-Selldone-f39f37?style=flat&label=Core&labelColor=%23567&color=%23000)
![License](https://img.shields.io/github/license/selldone/core.svg)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/e06b6bb638104350a6cbd7cc056ce6c1)](https://app.codacy.com/gh/selldone/core/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)


# Selldone Core

* **Mode:** 🌍 Public
* **Use case:** Fundamental models, types and functions to work with Selldone and create app for both storefront or backoffice.
* **Project Type:** JS Library

🛍️ Go to the [**Full Storefront Project ▶**](https://github.com/selldone/storefront) 

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
npm install selldone/core-js --save
```
```bash
yarn add @selldone/core-js
```


## Usage

Here's a basic example to get you started:

```javascript
import { SelldoneCore } from "@core/SelldoneCore";

SelldoneCore.Setup();
```


## Contribution

We welcome contributions! If you find a bug or have a feature request, please open an issue. If you'd like to contribute code, please fork the repository and submit a pull request.


---

## License
**Selldone Ecosystem License Agreement**

1. **Scope of License**: This license is granted exclusively for the use of the enclosed code (hereinafter referred to as "the Code") within the Selldone ecosystem. The licensee is authorized to use the Code solely in conjunction with services and applications that are part of, or directly related to, the Selldone ecosystem.

2. **Commercial Use Restriction**: The licensee is strictly prohibited from using the Code for any commercial purposes outside the Selldone ecosystem. Commercial utilization is permissible only when it is within the Selldone ecosystem and in accordance with the terms of this agreement.

3. **Permission for Free Use**: The Code may be used for non-commercial, free services, provided that explicit credit is given to Selldone. This credit must include the name "Selldone" prominently displayed on the user interface of the relevant service or application, along with a hyperlink to [selldone.com](https://selldone.com).

4. **No Redistribution**: The licensee may not redistribute the Code, in whole or in part, to any third party outside the Selldone ecosystem, unless expressly authorized by Selldone.

5. **No Modification for Redistribution**: While modifications to the Code for personal or internal use within the Selldone ecosystem are allowed, the licensee may not modify the Code for the purpose of redistribution outside the Selldone ecosystem.

6. **Termination**: Failure to comply with the terms of this agreement will result in the immediate termination of the license and may subject the licensee to legal action.

7. **Disclaimer of Warranty**: The Code is provided "as is" without any warranties of any kind, either expressed or implied, including but not limited to implied warranties of merchantability or fitness for a particular purpose.

8. **Limitation of Liability**: In no event shall Selldone be liable for any damages arising out of the use or inability to use the Code.

9. **Jurisdiction and Disputes**: This agreement shall be governed by the laws of the jurisdiction where Selldone is established. Any disputes arising from this agreement shall be resolved in the courts of that jurisdiction.

By using the Code, the licensee acknowledges that they have read, understood, and agreed to the terms of this license.

---