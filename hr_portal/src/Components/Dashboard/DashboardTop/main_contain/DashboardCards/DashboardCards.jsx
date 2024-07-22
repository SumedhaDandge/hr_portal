import '../../DashboardTop.css';



function DashboardCards() {
  return (
    <>
      <div className="dashboard_cards  ">
        <div className="block_section">
          {/* Total Shortlisted */}
          <div className="block flex justify-center items-center gap-x-6">
            <div className="block_img">
              <img src="/job-search.png" alt="" />
            </div>
            <div className="block_info border-l-4 Shortlisted">
              <h1 className="text-4xl font-bold">10</h1>
              <h4 className="text-base font-normal">Total Shortlisted</h4>
              <p className="text-xs	 font-normal">Update July 16, 2024</p>
            </div>
          </div>
          {/* Total Hired */}
          <div className="block flex justify-center items-center gap-x-6">
            <div className="block_img">
              <img src="/hired.png" alt="" srcSet="" />
            </div>
            <div className="block_info border-l-4 Hired">
              <h1 className="text-4xl font-bold">5</h1>
              <h4 className="text-base font-normal">Total Hired</h4>
              <p className="text-xs	 font-normal">Update July 16, 2024</p>
            </div>
          </div>
          {/* Upcoming Interviews */}
          <div className="block flex justify-center items-center gap-x-6">
            <div className="block_img">
              <img src="/job-interview.png" alt="" srcSet="" />
            </div>
            <div className="block_info border-l-4 Interviews ">
              <h1 className="text-4xl font-bold">190</h1>
              <h4 className="text-base font-normal">Upcoming Interviews</h4>
              <p className="text-xs	 font-normal">Update July 16, 2024</p>
            </div>
          </div>
          {/* Total Candidates */}
          <div className="block flex justify-center items-center gap-x-6">
            <div className="block_img">
              <img src="/candidate 1.png" alt="" srcSet="" />
            </div>
            <div className="block_info border-l-4  Candidates">
              <h1 className="text-4xl font-bold">23</h1>
              <h4 className="text-base font-normal">Total Candidates</h4>
              <p className="text-xs	 font-normal">Update July 16, 2024</p>
            </div>
          </div>
          {/* Total Clients */}
          <div className="block flex justify-center items-center gap-x-6">
            <div className="block_img">
              <img src="/public-relation.png" alt="" srcSet="" />
            </div>
            <div className="block_info border-l-4 Clients ">
              <h1 className="text-4xl font-bold">5</h1>
              <h4 className="text-base font-normal">Total Clients</h4>
              <p className="text-xs	 font-normal">Update July 16, 2024</p>
            </div>
          </div>
          {/* Active Jobs */}
          <div className="block flex justify-center items-center gap-x-6">
            <div className="block_img">
              <img src="/suitcase.png" alt="" srcSet="" />
            </div>
            <div className="block_info border-l-4 Jobs">
              <h1 className="text-4xl font-bold">30</h1>
              <h4 className="text-base font-normal">Active Jobs</h4>
              <p className="text-xs	 font-normal">Update July 16, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardCards;
