import * as React from "react"

export default function TOC({toc}) {
    const content = toc.map((section, idx) => (
        <li key={idx}>
            <a href={`#${section.anchor}`}>
                <div style={{color: "black"}}>{section.title}</div>
            </a>
            {section.children ? (<ul>
                {section.children.map((child, childIdx) => (
                    <li key={childIdx}>
                        <a href={`#${child.anchor}`}>
                            <div style={{color: "black"}}>{child.title}</div>
                        </a>
                    </li>
                ))}
            </ul>) : <></>}
        </li>
    ))

    return (<>
    <h1>Table of Contents</h1>
    <div style={{backgroundColor: "lightgray", 
        width: "max-content", 
        paddingRight: "5px"}}
    >
        <ol>
            {content}
        </ol>
    </div></>)
}