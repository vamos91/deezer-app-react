import React, { useState } from "react"
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Col
} from 'reactstrap'


const AlbumCard = ({title, cover, mp3, handleParentClick, isClicked}) => {
    
    const addToplaylist = (myTitle) => {
        handleParentClick(myTitle)
    }
 
    return(
       <Col style={{marginBottom: '15px'}}>
        <Card
            style={{
                width: '18rem'
            }}
            >
            <img
                alt="Sample"
                src={cover}
            />
            <CardBody>
                <CardTitle tag="h5">
                {title}
                </CardTitle>
                <Button style={{ marginBottom: '15px', backgroundColor: isClicked ? 'red' : '' }} onClick={() => addToplaylist(title)}>
                     {isClicked ? 'Remove from playlist' : 'Add to playlist'}
                </Button>
                <figure>
                    <audio style={{width: '100%'}}
                        controls
                        src={mp3}>
                            <a href={mp3}>
                                Download audio
                            </a>
                    </audio>
                </figure>
            </CardBody>
            </Card>
       </Col>
    )
}

export default AlbumCard