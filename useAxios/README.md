# useAxios
React-Hook to use Axios easy way.

## Notice
**useBeforeLeave** is custom React-Hook; So it works on only **React environment**.

## Installation
1. `$ npm install @sooni-hooks/use-axios`
2. Add `import useAxios from "@sooni-hooks/use-axios"` in your script.
3. Done!

## How to use
**useAxios** has two parameters.
- **opts**: Config to `axios`
- **axiosInstance**: A request method. If you don't give any argument, default instance is `axios`.

useAxios returns an object containing `state` and `refetch()`.
- **state**: An object containing `loading`, `error`, `data`.
  - **loading**: Default value is `true`. When fetching is completed, It changes to `false`.
  - **error**: The error message.
  - **data**: The data that you want to get.
- **refetch()** A function that retries fetching data from URL.