import {useRef, useState} from "react";
import Avatar from "@mui/material/Avatar";
import {getImageFromBase64} from "../../util/helper";
import "../../css/Profile/Profile.css"
import {Icon} from "@mui/material";
import UploadIcon from '@mui/icons-material/Upload';

export function AvatarImage({ image , setImage }) {
    const [imgfile, uploadimg] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const fileInputRef = useRef(null);

    useState(() => {
        uploadimg(getImageFromBase64(image));
    }, []);

    const handleImageUpload = (e) => {
        if (e.target.files.length !== 0) {
            const newImage = URL.createObjectURL(e.target.files[0]);
            uploadimg(newImage);
        }
    };
    const handlePreviewClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="App">
            <div>
                <center>
                    {imgfile && (
                        <span onClick={handlePreviewClick} >
                             <input
                                 type="file"
                                 accept="image/*"
                                 onChange={handleImageUpload}
                                 ref={fileInputRef}
                                 style={{ display: 'none' }}
                             />
                            <div className={"mb-3"}
                                 onMouseEnter={() => setIsHovered(true)}
                                 onMouseLeave={() => setIsHovered(false)}
                                 style={{
                                     width: '100px',
                                     height: '100px',
                                 }}>
                               <Avatar src={imgfile} sx={"width:100px; height:100px"} className={"mb-3"}></Avatar>
                                {isHovered && (
                                    <div
                                        className="overlay"
                                        style={{
                                            position: 'relative',
                                            top: -116,
                                            left: 0,
                                            borderRadius: '50%',
                                            width: '100%',
                                            height: '100%',
                                            background: 'rgba(0, 0, 0, 0.5)',
                                            cursor: 'pointer',
                                        }}>
                                    <UploadIcon
                                        sx={{color:"white", fontSize:"40px",position: 'relative', top: '25%'}}/>
                                    </div>
                                )}
                            </div>
                        </span>
                    )}
                </center>
            </div>
        </div>
    );
}
