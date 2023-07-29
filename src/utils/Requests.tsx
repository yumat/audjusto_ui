const requests = {
    fetchGroupData:  import.meta.env.VITE_API_URL + '/group',  // GETメソッド
    InsertGroupData: import.meta.env.VITE_API_URL + '/group',  // POSTメソッド
  };
  
  export default requests;