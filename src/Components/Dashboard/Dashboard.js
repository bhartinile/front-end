import styles from './Dashboard.module.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { VscAdd } from "react-icons/vsc";
import ClaimDisplayTable from '../../Page/ClaimDisplayTable/ClaimDisplayTable';
import axios from 'axios';


const Dashboard = () => {
  const [claimData,setClaimData] = useState([]);
  const [searchtext,setSearchtext] = useState('');
  const navigate = useNavigate();
  const getClaimDataHandler = async()=>{
        try {
          const {data,status} = await axios.get('/api/user/car/car-claim');
          if(status===200){
            setClaimData(data.message)
          }
        } catch (error) {
          alert(error.response.data.error);
        }
  }
  
  
  
  useEffect(()=>{
    getClaimDataHandler();
  },[])
   
  return (
    <>
      <div className={styles.dashboard_parent}>
        <div className={styles.create_cliam} onClick={()=>navigate('/create-claim')}>
          <VscAdd className={styles.logo} />
          
          <span> Create Claim</span>
        </div>
        <div className={styles.pagination_div}>
          <div>
            <input type="text" placeholder='Filter'  className={styles.search_input}
            value={searchtext}
            onChange={(e)=>setSearchtext(e.target.value)} />
          </div>
          <div className={styles.page_change}>
          <ClaimDisplayTable claimData={claimData}/>
         
        </div>
          
        </div>
       
      </div>
      
      
    </>
  );
};
export default Dashboard;
