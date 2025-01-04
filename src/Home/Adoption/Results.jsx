import React, { useContext } from 'react';
import FlipCard from './Flipcart';
import { DataContext } from './DataContext';

const Results = ({ filteredData }) => {

    const {data, error, loading} = useContext(DataContext);
    
    if (loading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Error: {error}</p>;
      }
    
      if (!data) {
        return <p>No data available.</p>;
      }
    
    return (
        <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-4">
            <p>Test</p>
                {filteredData.length > 0 ? (
                    filteredData.map((cat) => <FlipCard key={cat.id} data={cat} />)
                ) : (
                    <p>No matches found</p>
                )}
            </div>
        </>
    )
}

export default Results
