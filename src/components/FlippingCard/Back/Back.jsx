import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';

export default function Back({
    round,
    flippingImageBack,
    flippingImageAlt,
    flippingTitle,
    flippingDescription
}) {
    return (
        <Fragment>
            <section style={{
                width: "400px",
                height: "400px",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                boxShadow: "0 0 10px gray"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    fontSize: "25px",
                }}>
                    <img src={flippingImageBack} alt={flippingImageAlt} />
                    <h3 style={{ margin: 0 }}>{flippingTitle}</h3>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center"
                }}>
                    <p>{flippingDescription}</p>
                    <div style={{ display: "flex" }}>
                        <Button 
                            variant="contained" 
                            style={{ margin: "0 3px" }}>
                            Más información +
                        </Button>
                        <Button 
                            variant="contained" 
                            style={{ margin: "0 3px" }} 
                            onClick={round}>
                            Volver
                        </Button>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}