import DataTable from './DataTable';
import './masterTable.css';
import skillsetIcon from '../../assets/target.svg';
import locationIcon from '../../assets/location-map.svg';
import positionIcon from '../../assets/person-position.svg';


const MasterTables =()=>{
    const data = [
        { srNo: 1, name: 'Developer' },
        { srNo: 2, name: 'Tester' },
        { srNo: 3, name: 'SAP' },
        { srNo: 4, name: 'Sop' },
        { srNo: 5, name: 'Developer' },
        { srNo: 6, name: 'Tester' },
        { srNo: 7, name: 'SAP' },
        { srNo: 8, name: 'Sop' },
      ];
    

    return(
        <>
         
    <div className="App">
      <div className="masterTable-container">        
         <DataTable title="Position List" headerIcon={positionIcon} data={data} />
         <DataTable title="Locality/City" headerIcon={locationIcon} data={data} />
         <DataTable title="Skillset" headerIcon={skillsetIcon} data={data} />
        {/*<Table title="Locality/City" data={data} />
        <Table title="Skillset" data={data} /> */}
      </div>
    </div>
        </>
    )
};

export default MasterTables;