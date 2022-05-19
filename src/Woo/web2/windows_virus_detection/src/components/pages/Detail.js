import Footer from '../Footer/Footer';
import React, { useEffect } from 'react';
import './Detail.css';
import { useState } from 'react';
import Axios from 'axios';

function Detail() {
  const [FileHeader, setFileHeader] = useState({
    NumberOfSections: '',
    Machine: '',
    MD5: '',
    SHA: ''
  });
  const {
    NumberOfSections, Machine, MD5, SHA
  } = FileHeader;
  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setFileHeader(response.data);
    })
  }, [FileHeader]);

  return (
    <div className="contents">
      <button onClick={useEffect}>불러오기</button>
      <div>NumberOfSections={NumberOfSections}<br/>Machine={Machine}<br/>MD5={MD5}<br/>SHA={SHA}</div>

      <Footer />
    </div>
  )
}
export default Detail;