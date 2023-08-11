const requests = {
    healthCheck:  import.meta.env.VITE_API_URL + '/health_check',  // GETメソッド
    fetchGroupData:  import.meta.env.VITE_API_URL + '/group',  // GET Groupメソッド
    InsertGroupData: import.meta.env.VITE_API_URL + '/group',  // POST Groupメソッド
    fetchMemberData:  import.meta.env.VITE_API_URL + '/member',  // GET Memberメソッド
    fetchMembersData:  import.meta.env.VITE_API_URL + '/members',  // GET Membersメソッド
    fetchPayData:  import.meta.env.VITE_API_URL + '/pay',  // GET Paysメソッド
    fetchPaysData:  import.meta.env.VITE_API_URL + '/pays',  // GET Paysメソッド
    InsertPayHistory: import.meta.env.VITE_API_URL + '/pay',  // POST Payメソッド
    DeletePayHistory: import.meta.env.VITE_API_URL + '/pay',  // Delete Payメソッド
    fetchPaybackData:  import.meta.env.VITE_API_URL + '/paybacks',  // GET Paybacksメソッド
    fetchScheduleData: import.meta.env.VITE_API_URL + '/schedule',  // GET Scheduleメソッド
    InsertScheduleData: import.meta.env.VITE_API_URL + '/schedule',  // POST Scheduleメソッド
    fetchAttendanceData: import.meta.env.VITE_API_URL + '/attendance',  // GET Attendanceメソッド
    InsertAttendanceData: import.meta.env.VITE_API_URL + '/attendance',  // POST Attendanceメソッド
    DeleteAttendanceData: import.meta.env.VITE_API_URL + '/attendance',  // Delete Attendanceメソッド
  };
  
  export default requests;