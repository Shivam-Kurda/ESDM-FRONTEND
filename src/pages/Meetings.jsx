import React from 'react'
import Card from '../Components/Card'
function Meetings() {
  return (
    <div className="bg-white min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Meetings</h1>
      <div className="grid grid-cols-1 gap-4">
        <Card
          title="RL SEMICONDUCTORS"
          content={
            <div>
            <p>Agenda: Price negotiation meeting</p>
            <p>Time : 6 PM,22nd feb 2025</p>
            </div>
          }
          linkText=""
          onLinkClick={() => {}}
        />
        <Card
          title="ABC Chip Manufacturer"
          content={
            <div>
            <p>Agenda: Quality Checking Meeting </p>
            <p>Time : 6 PM,24th feb 2025</p>
            </div>
          }
          linkText=""
          onLinkClick={() => {}}
        />
       <Card
          title="BOAT Music Pvt Limited"
          content={
            <div>
            <p>Agenda: Earphone Designing</p>
            <p>Time : 4 PM,25th feb 2025</p>
            </div>
          }
          linkText=""
          onLinkClick={() => {}}
        />
      </div>
    </div>
  )
}

export default Meetings