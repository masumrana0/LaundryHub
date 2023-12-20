/**
 * Title: 'Data Fetching with client side randering'
 * Description: 'It's common for dataFetching another page'
 * Author: 'Masum Rana'
 * Date: 07-12-2023
 *
 */

const fetchData = async (url: string, setData: (arg0: any) => void) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const result = await response.json();
  const DataCollection = result?.data;

  setData(DataCollection);
};

export default fetchData;
