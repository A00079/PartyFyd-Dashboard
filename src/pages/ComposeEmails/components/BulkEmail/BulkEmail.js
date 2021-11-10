import React from "react";
import CSVReader from "react-csv-reader";
import { ComposeForm } from '../../components';
import './bulkstyle.css';

const handleForce = (data, fileInfo) => console.log(data, fileInfo);

const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
};

const BulkEmail = () => {
    return (
        <div className="bulk-container cursor-pointer">
            <ComposeForm title="Bulk Message" messageBodyHeight={3} />
            <CSVReader cssClass="react-csv-input"
                label=""
                onFileLoaded={handleForce}
                parserOptions={papaparseOptions}
            />
        </div>
    )
}

export default BulkEmail;