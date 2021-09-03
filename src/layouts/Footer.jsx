import { makeStyles } from '@material-ui/styles';
import React from 'react'
import { Route } from 'react-router';

const useStyles = makeStyles({
    footer: {
        marginBottom: '10px'
    },
    footer_span: {
        color: 'red'
    },
    footer_p: {
        fontSize: '14px'
    }
})

const Footer = () => {
    const classes = useStyles();
    
    return ( 
        <div className={classes.footer}>
            <h2>Stopka</h2>
            <Route path="/" exact render={(props) => {
                return (
                    <p className={classes.footer_p}>Jesteś na 
                        <span className={classes.footer_span}> stronie głównej</span>
                    </p>)
            }}/>

            <Route path="/:page" exact render={(props) => {
                return(
                    <>
                        <p className={classes.footer_p}>Jesteś na 
                            <span className={classes.footer_span}> {props.match.params.page}</span>
                        </p>
                        <p className={classes.footer_p}>Jesteś na 
                            <span className={classes.footer_span}> {props.match.url}</span>
                        </p>
                        <p className={classes.footer_p}>Jesteś na 
                            <span className={classes.footer_span}> {props.match.path}</span>
                        </p>
                    </>
                    )
            }}/>
            
            <Route path="/:page/:idProduct" exact render={(props) => {
                return(
                    <>
                        <p className={classes.footer_p}>Jesteś na 
                            <span className={classes.footer_span}> {props.match.params.page}</span>
                        </p>
                        <p className={classes.footer_p}>Jesteś na 
                            <span className={classes.footer_span}> {props.match.url}</span>
                        </p>
                        <p className={classes.footer_p}>Jesteś na 
                            <span className={classes.footer_span}> {props.match.path}</span>
                        </p>
                    </>
                    )
            }}/>
        </div>
     );
}
 
export default Footer;