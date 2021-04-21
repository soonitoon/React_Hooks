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

## Example code
```js
function App() {
  const options = {
    url: "https://jsonplaceholder.typicode.com/todos/1", // example url
  };
  const { loading, error, data, refetch } = useAxios(options);
  return (
    <div className="App">
      <h1>{JSON.stringify(loading)}</h1>
      <p>{JSON.stringify(error)}</p>
      <p>{JSON.stringify(data)}</p>
      <button onClick={refetch}></button>
    </div>
  );
}
```