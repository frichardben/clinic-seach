## :rocket: Overview

RESTful API to allow  search in multiple clinic providers 

## ℹ️ About this project

RESTful API endpoint to allow search in multiple clinic providers and display results from all the available clinics by any of the following:

    Clinic Name
    State [ex: "CA" or "California"]
    Availability [ex: from:09:00, to:20:00]

### 📎 Documentation

<details>
 <summary><code>GET</code> <code><b>/</b></code> <code>(/api/v1/clinics/search)</code></summary>

##### Parameters
> | name        |  type      | data type      | description                   |
> |-------------|------------|----------------|-------------------------------|
> | `name`      |  optional  | string         | clinic name                   |
> | `state`     |  optional  | string         | clinic state                  |
> | `from / to` |  optional  | string         | clinic available              |

##### Responses

> | http code     | content-type                      | response                                                                             |
> |---------------|-----------------------------------|--------------------------------------------------------------------------------------|
> | `200`         | `application/json; charset=utf-8` | `[ {name: "UAB Hospital", state: "Alaska",availability: {from: "11:00", to: "20:00"} ]}`                                                     

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:3333/api/v1/clinics/search?state=Alaska
> ```
</details>


## 📝 Technologies

- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)

## :computer: Getting Started

### Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/) _(version 16 or greater)_.
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) _(version 1.22 or greater)_.



### :anchor: Installing

```bash
$ git clone https://github.com/frichardben/clinic-seach
# Go into the repository
$ cd clinic-seach
# Setting up node and yarn
$ nvm use
# Install dependencies
$ yarn install
# Run the project
$ yarn dev
# Run tests
$ yarn test
```
