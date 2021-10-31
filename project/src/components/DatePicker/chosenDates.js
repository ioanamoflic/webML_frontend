import { Component } from "react";
import { Stack, Paper, Button, stepButtonClasses } from "@mui/material";

class ChosenDates extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stack direction="row" style={{ marginBottom: "5px" }}>
                <Button disabled="true" variant="outlined" style={styles.leftButton}>
                    <div style={styles.column}>
                        <div style={styles.start}>Start date </div>
                        <div style={styles.leftDate}>27 Aug 2018 </div>
                    </div>
                </Button>
                <Button disabled="true" variant="outlined" style={styles.rightButton}>
                    <div style={styles.column}>
                        <div style={styles.end}>End date </div>
                        <div style={styles.rightDate}>31 Aug 2018 </div>
                    </div>
                </Button>
            </Stack>
        );
    }
}

export default ChosenDates;

const styles = {

    leftButton: {
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
        borderTopRightRadius: "0px",
        borderBottomRightRadius: "0px",
        width: "220px",
        height: "70px",
        background: "white",
        borderColor: "#BBC0BE",
        textAlign: "left",
        flexDirection: "column"
    },
    rightButton: {
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
        borderTopLeftRadius: "0px",
        borderBottomLeftRadius: "0px",
        width: "220px",
        height: "70px",
        background: "white",
        borderColor: "#BBC0BE",
        textAlign: "left",
        flexDirection: "column"
    },
    start: {
        fontSize: "10px",
        textAlign: "left",
        color: "#BBC0BE"
    },
    end:{
        fontSize: "10px", 
        color: "#BBC0BE" 
    },
    leftDate:{
        fontSize: "18px",
        textAlign: "left", 
        color: "#ae94e3", 
        fontStyle: "bold", 
        fontWeight: "bold" 
    },
    rightDate:{
        fontSize: "18px",
        color: "#40a2db",
        fontStyle: "bold",
        fontWeight: "bold"
    },
    column: {
        textAlign: "left",
        flexDirection: 'column' 
    }
}