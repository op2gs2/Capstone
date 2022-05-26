
import AWS from 'aws-sdk';
import { Row, Col, Button, Input, Alert } from 'reactstrap';
import { useState } from 'react'
import './Upload.css';
function Upload() {
    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    const ACCESS_KEY = 'AKIA4XBACY5Z7JRF7I3Q';
    const SECRET_ACCESS_KEY = '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';
    const REGION = "us-east-1";
    const S3_BUCKET = 'file-data-bucket';

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
        if (file.type !== 'image/jpeg' || fileExt !== 'jpg') {
            alert('jpg 파일만 Upload 가능합니다.');
            return;
        }
        setProgress(0);
        setSelectedFile(e.target.files[0]);
    }
    const uploadFile = (file) => {
        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: "upload/" + file.name
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
                            <Button className="Button" color="primary" onClick={() => uploadFile(selectedFile)}> Upload to S3</Button>
                        ) : null}
                        
                    </Col>
                </Row>
            </div>
        </div>
    );
    //<Input color="primary" type="file" onChange={handleFileInput} />
}
export default Upload;