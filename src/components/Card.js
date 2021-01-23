import React from 'react'
import {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import {Autocomplete} from '@material-ui/lab';

const Card = ({ article,addTag,prevTagList }) => {
    const [tag,setTag] = useState('')
    return (
        <div className="col">
            <div className="card h-100 p-3 m-3">
                <div className="card-body">
                    <h5 className="card-title">{article.header}</h5>
                    <p className="card-text">{article.desc}</p>
                    {article.tags.map((tag)=>(
                        <span className="badge bg-info text-dark m-1">{tag}</span>
                        ))}
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#exampleModal1"+article.id}>
                        add tag
                    </button>
                    <div className="modal fade" id={"exampleModal1"+article.id} tabIndex="-1" aria-labelledby={"exampleModalLabel1"+article.id} aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id={"exampleModalLabel1"+article.id}>Add tag</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                <Autocomplete
                                    id={"combo-box-demo1"+article.id}
                                    options={prevTagList}
                                    freeSolo
                                    inputValue={tag}
                                    onInputChange={(event, newInputValue) => {
                                    setTag(newInputValue);
                                }}
                                style={{ width: 200 }}
                                renderInput={(params) => <TextField {...params} label="Tag box" variant="outlined" />}
                                />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary p-0" data-bs-dismiss="modal" onClick = {()=>addTag(article.id,tag)}>Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Card
