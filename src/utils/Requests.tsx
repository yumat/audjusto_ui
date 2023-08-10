const requests = {
    healthCheck:  import.meta.env.VITE_API_URL + '/health_check',  // GETメソッド
    fetchGroupData:  import.meta.env.VITE_API_URL + '/group',  // GET Groupメソッド
    InsertGroupData: import.meta.env.VITE_API_URL + '/group',  // POST Groupメソッド
    fetchMembersData:  import.meta.env.VITE_API_URL + '/members',  // GET Membersメソッド
    fetchPayData:  import.meta.env.VITE_API_URL + '/pay',  // GET Paysメソッド
    fetchPaysData:  import.meta.env.VITE_API_URL + '/pays',  // GET Paysメソッド
    InsertPayHistory: import.meta.env.VITE_API_URL + '/pay',  // POST Payメソッド
    DeletePayHistory: import.meta.env.VITE_API_URL + '/pay',  // Delete Payメソッド
    fetchPaybackData:  import.meta.env.VITE_API_URL + '/paybacks',  // GET Paybacksメソッド
    InsertScheduleData: import.meta.env.VITE_API_URL + '/schedule',  // POST Eventメソッド
  };
  
  export default requests;