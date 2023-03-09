import React from "react";
import {blog01, blog02, blog03, blog04, blog05} from './index'
import { Article } from "../../components";
import "./blog.css"
const Blog = () => {
    return (
        <div className="gpt3__blog">
            <h1 className="gradient__text">A lot is happening,<br/> We are blogging about it.</h1>
            <div className="gpt3__blog-articles">
                <Article src={blog01} imageName='blog01' date='2023-03-08' title='GPT-3 and Open  AI is the future. Let us explore how it is?' />
                <Article src={blog02} imageName='blog01' date='2023-03-08' title='GPT-3 and Open  AI is the future. Let us explore how it is?' />
                <Article src={blog03} imageName='blog01' date='2023-03-08' title='GPT-3 and Open  AI is the future. Let us explore how it is?' />
                <Article src={blog04} imageName='blog01' date='2023-03-08' title='GPT-3 and Open  AI is the future. Let us explore how it is?' />
                <Article src={blog05} imageName='blog01' date='2023-03-08' title='GPT-3 and Open  AI is the future. Let us explore how it is?' />
            </div>
        </div>
    )
}
export default Blog;