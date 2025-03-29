import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Card from '../Components/Card';

function Overview() {
  const {user,isAuthenticated,isLoading}=useAuth0()
  const [userMetadata, setUserMetadata] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserdata] = useState(null);
  console.log(user)

  const handleEditClick = () => {
    setIsModalOpen(true);
    console.log("modal set true")
  };


  // useEffect(() => {
  //   const fetchUserMetadata = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:5001/api/user-metadata`, {
  //         params: { userId: user.sub },
  //       });
  //       setUserMetadata(response.data);
  //     } catch (error) {
  //       console.error('Error fetching user metadata:', error);
  //     }      
  //   };

  //   if (isAuthenticated) {
  //     fetchUserMetadata();
  //   }
  // }, [isAuthenticated, user?.sub]);

  // return (
  //   isAuthenticated && (
  //     <div>
  //       <h2>User Metadata</h2>
  //       {userMetadata ? (
  //         <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
  //       ) : (
  //         'No user metadata defined'
  //       )}
  //     </div>
  //   )
  // )

  useEffect( () => {
    async function fetch_userdata() {
      
    
    try {
      const response = await axios.get('http://localhost:5001/auth/fetch-metadata', {
        params: { userId: user.sub },
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      
      setUserdata(response.data)
      console.log('User metadata:', response.data);
    } catch (error) {
      console.error('Error fetching user metadata:', error);
    }
  }
fetch_userdata();
  },user)


  
  const handleQuotesClick = () => {
    // Navigate to the quotes page
  };

  const handleMeetingsClick = () => {
    // Navigate to the meetings page
  };

  return (
    <div className="bg-white min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          title="Profile"
          content={userData? (
            <div className='text-left'>
              {/* <h3 className="text-lg font-bold">User Details</h3> */}
              <div className="mt-2">
                <p><span className='font-bold'>First Name</span>: {userData.firstname}</p>
                <p><span className='font-bold'>Last Name</span>: {userData.lastname}</p>
                <p><span className='font-bold'>Email</span>: {userData.email}</p>
                <p><span className='font-bold'>Email Verification status</span>: {user.email_verified? 'Verified' : 'Not verified'}</p>
                {/* Add more fields as needed */}
              </div>
            </div> ): (
              <p>Loading...</p>
          )
          }
          linkText="Edit Profile"
          onLinkClick={handleEditClick}
          
          
        />
        
        <Card
          title="Quotes"
          content={<p>Recent Quotes: 5<br />Pending: 2</p>}
          linkText="See All"
          onLinkClick={handleQuotesClick}
        />
        <Card
          title="Meetings"
          content={<p>Upcoming Meetings: 3<br />Past Meetings: 10</p>}
          linkText="See All"
          onLinkClick={handleMeetingsClick}
        />
         
        <div className="bg-gray-200 p-4 rounded shadow-md">
          <h3 className="text-lg font-bold">Analytics</h3>
          <p>Top Selling Products, Customer Demography, Sales</p>
        </div>
      </div>
    </div>
  );
}

export default Overview