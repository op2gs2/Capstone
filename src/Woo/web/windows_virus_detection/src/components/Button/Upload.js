
import AWS from 'aws-sdk';
import { Row, Col, Button, Input, Alert } from 'reactstrap';
import React, { useEffect, useState } from 'react'
import './Upload.css';
import BMF from 'browser-md5-file';
import axios from 'axios';
function Upload() {
    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [MD5, setMD5] = useState();
    const bmf = new BMF();

    const ACCESS_KEY = '';
    const SECRET_ACCESS_KEY = '';
    const REGION = "us-east-1";
    const S3_BUCKET = 'testbucket112233445566778899';
    AWS.config.update({
        region: REGION,
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_ACCESS_KEY
    });

    const myBucket = new AWS.S3({
        params: { Bucket: S3_BUCKET },
        region: REGION,
    });

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        const fileExt = file.name.split('.').pop();
        setProgress(0);
        setSelectedFile(e.target.files[0]);
        bmf.md5(
            file,
            (err, md5) => {
                console.log('err:', err);
                console.log('md5 string:', md5); // 97027eb624f85892c69c4bcec8ab0f11
                setMD5(md5);

            },
            progress => {
                console.log('progress number:', progress);
            },
        );

    }
    const uploadFile = (file) => {
        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: file.name//"upload/" +
        };

        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                setProgress(Math.round((evt.loaded / evt.total) * 100))
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                    setSelectedFile(null);
                }, 3000)
            })
            .send((err) => {
                if (err) console.log(err)
            })

    }

    const send = () => {
        axios.post("api/setMD5", {
            md: MD5
        })
            .then(function (response) {
                console.log(response);// response  
            }).catch(function (error) {
                // 오류발생시 실행
            })
    }

    return (
        <div className="App">
            <div className="App-body">
                <Row>
                    <Col>
                        {showAlert ?
                            <Alert color="primary">업로드 진행률 : {progress}%</Alert>
                            :
                            <Alert color="primary"></Alert>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col><div className='filebox'>
                        <label for="file">Upload</label>
                        <Input color="primary" type="file" id="file" onChange={handleFileInput} />

                    </div>
                        {selectedFile ? (
                            <Button className="Button" color="primary" onClick={() => { uploadFile(selectedFile); send(); }}> Upload to S3 </Button>
                        ) : null}

                    </Col>
                </Row>
            </div>
        </div>
    );
    //<Input color="primary" type="file" onChange={handleFileInput} />
}
export default Upload;