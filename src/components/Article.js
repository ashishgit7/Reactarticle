import React from 'react'
import { useState,useEffect } from 'react'
import Card from './Card'
import TextField from '@material-ui/core/TextField';
import {Autocomplete} from '@material-ui/lab';

const sample= [
    {
        id:1,
        header: 'header1',
        desc: 'Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dumy text ever since',
        tags:['tag1','tag2','tag3']
    },
    {
        id:2,
        header: 'header2',
        desc: 'the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not o',
        tags:['tag2','tag3']
    },
    {
        id:3,
        header: 'header3',
        desc: 'Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dumy text ever since',
        tags:['tag2','tag3','tag4']
    },
    {
        id:4,
        header: 'header4',
        desc: 'Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dumy text ever since',
        tags:['tag2','tag4']
    },
    {
        id:5,
        header: 'header5',
        desc: 'the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not o',
        tags:['tag2','tag4','tag6','tag7']
    }

]
const sampletag=[
    'tag1',
    'tag2',
    'tag3',
    'tag4',
    'tag5',
    'tag6',
    'tag7'
]

const Article = () => {
    const [articleList, setArticleList] = useState([])
    const [prevTagList, setPrevTagList] = useState([])
    const [header, setHeader] = useState('')
    const [desc, setDesc] = useState('')
    const [searchTag, setSearchTag] = useState('')
    const disp = () => {
        const article = {
            id: Math.floor(Math.random() * 1000),
            header: header,
            desc: desc,
            tags: []
        }
        setArticleList([...articleList, article]);
    }
    useEffect(() => {
        setArticleList(sample)
        setPrevTagList(sampletag)
    }, [])
    const check= (article)=>{
        if(searchTag=='')
        return true
        if(article.tags.includes(searchTag))
        return true
        else
        return false
    }
    const addTag = (_id, tag) => {
        console.log(_id)
        const element = articleList.findIndex((elem) => elem.id == _id);
        const newTaskList = [...articleList];
        const tagList = newTaskList[element].tags
        console.log(tagList)
        if (tagList.includes(tag)) {
            return
        }
        tagList.push(tag)
        const oldPrevTaglist = [...prevTagList]
        oldPrevTaglist.push(tag)
        setPrevTagList(oldPrevTaglist)
        newTaskList[element] = {
            ...newTaskList[element],
            tags: tagList,
        };
        setArticleList(newTaskList)
        console.log(articleList)
    }
    return (
        <div>
            <button type="button" className="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Add article
            </button>
           
            <Autocomplete className = "text-center mx-auto mt-3"
                id="combo-box-demo1"
                options={prevTagList}
                freeSolo
                inputValue={searchTag}
                onInputChange={(event, newInputValue) => {
                    setSearchTag(newInputValue);
                }}
                style={{ width: 200}}
                renderInput={(params) => <TextField {...params} label="filter box" variant="outlined" />}
            />
          

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon3">Header</span>
                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" onChange={(e) => setHeader(e.target.value)} />
                            </div>
                            <div className="input-group">
                                <span className="input-group-text">Description</span>
                                <textarea className="form-control" aria-label="With textarea" onChange={(e) => setDesc(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={disp}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-cols-3 row-cols-md-3 g-4">
                {
                    articleList.map((article) => (

                        check(article) && <Card key={article.id} article={article} addTag={addTag} prevTagList={prevTagList} />

                    ))
                }
            </div>
        </div>
    )
}

export default Article
