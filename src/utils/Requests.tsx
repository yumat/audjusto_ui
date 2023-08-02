const requests = {
    healthCheck:  import.meta.env.VITE_API_URL + '/health_check',  // GETメソッド
    fetchGroupData:  import.meta.env.VITE_API_URL + '/group',  // GET Groupメソッド
    InsertGroupData: import.meta.env.VITE_API_URL + '/group',  // POST Groupメソッド
    fetchMembersData:  import.meta.env.VITE_API_URL + '/members',  // GET Membersメソッド
    fetchPaysData:  import.meta.env.VITE_API_URL + '/pays',  // GET Paysメソッド
    InsertPayHistory: import.meta.env.VITE_API_URL + '/pay',  // POST Payメソッド
    fetchPaybackData:  import.meta.env.VITE_API_URL + '/paybacks',  // GET Paybacksメソッド
  };
  
  export default requests;