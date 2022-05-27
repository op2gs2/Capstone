import Footer from '../Footer/Footer';
import React, { useEffect, useState } from 'react';
import './Detail.css';
import axios from 'axios';
function Detail() {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get('/api/getData');
        setData(response);
        console.log(data);
        if(data.length!=0){
          setRes(true);
          console.log(response)
        }else{
          setRes(false);
        }
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="contents">
      {loading && <div className='load'>Loading</div>}
      {!loading && res && (
        <div>
          <h1 className="detail">Detail</h1>
          <table className="tables">
            <tbody>
              <th>FileKey</th>
              <tr><td>name</td><td>{data.map(item=>(<span>{item.name}</span>))}</td></tr>
              <tr><td>MD5</td><td>{data.map(item=>(<span>{item.MD5}</span>))}</td></tr>
              <tr><td>SHA</td><td>{data.map(item=>(<span>{item.SHA}</span>))}</td></tr>
            </tbody>
            <tbody>
              <th>FileHedaer</th>
              <tr><td>NumberOfSections</td><td>{data.map(item=>(<span>{item.NumberOfSections}</span>))}</td></tr>
              <tr><td>Machine</td><td>{data.map(item=>(<span>{item.Machine}</span>))}</td></tr>
            </tbody>
            <tbody>
            <th>OptionalHeader</th>
              <tr><td>AddressOfEntryPoint</td><td>{data.map(item=>(<span>{item.AddressOfEntryPoint}</span>))}</td></tr>
              <tr><td>ImageBase</td><td>{data.map(item=>(<span>{item.ImageBase}</span>))}</td></tr>
              <tr><td>FileAlignment</td><td>{data.map(item=>(<span>{item.FileAlignment}</span>))}</td></tr>
              <tr><td>SizeOfImage</td><td>{data.map(item=>(<span>{item.SizeOfImage}</span>))}</td></tr>
              <tr><td>SizeOfHeader</td><td>{data.map(item=>(<span>{item.SizeOfHeader}</span>))}</td></tr>
            </tbody>
            <tbody>
            <th>SectionHeader</th>
              <tr><td>SectionName</td><td>{data.map(item=>(<span>{item.SectionName}</span>))}</td></tr>
              <tr><td>VirtualSize</td><td>{data.map(item=>(<span>{item.VirtualSize}</span>))}</td></tr>
              <tr><td>VirtualAddress</td><td>{data.map(item=>(<span>{item.VirtualAddress}</span>))}</td></tr>
              <tr><td>SizeOfRawData</td><td>{data.map(item=>(<span>{item.SizeOfRawData}</span>))}</td></tr>
              <tr><td>PointerToRawData</td><td>{data.map(item=>(<span>{item.PointerToRawData}</span>))}</td></tr>
            </tbody>
          </table>
        </div>)}
        {(!loading && !res) && <div className='nodata'>데이터가 없습니다.</div>
        }
      <Footer />
    </div>
  );
}
export default Detail;