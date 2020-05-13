import React, { useState } from 'react';
import { Content } from './Styles/NewPost';
import { uploadImage, sendPost } from './functions/UserFunctions';
export const NewPost= (user) =>{
    const [imageUploadedApi, setImage] = useState('');
    const [imageUploaded, setimageUploaded] = useState('');
    const [description , setDescription] = useState('');
    
    const onChange = (e)=>{
        const text = document.getElementById('inputpost');
            text.style.height = 'auto';
            text.style.height = text.scrollHeight+'px';
            setDescription(e.currentTarget.value)
    }
    const onChangeInput = (e)=>{
            if(!e.target.files[0])
            return;
                 const formData = new FormData();
                 formData.append('image',e.target.files[0]);
                 setImage(formData);
                 setimageUploaded(URL.createObjectURL(e.target.files[0]))
             
    }
    const onSubmit =(e)=>{
        e.preventDefault()
        uploadImage(imageUploadedApi).then(response=>{
            if(response.status === 200){
                sendPost({
                    description: description,
                    imageContent: response.data.link,
                    deletehash: response.data.deletehash
                },localStorage.token).then(res =>{
                    if(res){
                        setimageUploaded('');
                        setImage('');
                        setDescription('');
                        document.getElementById('inputPosts').value = '';
                    }

                })
               return  true;
            }
            window.alert('Erro ao realizar o upload')
            console.log(response, 'repso')
        })
       
    }
    return(
        <Content image={user.image}>
        <div className="postinput">
            <div className="profileinput">
                <div className="profileInfoinput">
                    <div className="imginput">
                    </div>
                    <p>{user.name}</p>
                   
                </div>
                <div className = 'confirm'>
                    <button type='submit' form="form">Postar</button>
                </div>
            </div>
            <form className="contentPostinput" id= "form" onSubmit={onSubmit}>
               <textarea  onChange={onChange} id='inputpost' value={description} placeholder='Digite uma descrição!' />
               <input id='inputPosts' type='file' onChange={onChangeInput} />
    {imageUploaded ?   <div className="imgPostinput">
                    <img src={imageUploaded} alt=''></img>
                </div> : null}
  
            </form>

        </div>
    </Content>
    )
}