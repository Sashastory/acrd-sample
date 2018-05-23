import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import * as action from '../../../../store/actions/index';

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    marginRight: "25px"
  },
  field: {}
});

class RuleDetails extends Component {
  // state = {
  //   id: 15,
  //   group: 11,
  //   signal: "NO",
  //   riskValue: 34,
  //   beginDate: "03.04.2018",
  //   endDate: "27.04.2018",
  //   type: "save precedent",
  //   author: "alfa_iss",
  //   description: "test",
  //   formula: "",
  //   formulaU: "",
  //   formulaP: ""
  // };

  
  fieldChangeHandler = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  
  render() {
    
    const { rule } = this.props;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <TextField
            id="id-field"
            label="ID"
            value={rule.id}
            className={classes.field}
            margin="normal"
            onChange={this.fieldChangeHandler('id')}
          />
          <TextField 
            id="author-field"
            label="Автор"
            value={rule.author}
            className={classes.field}
            margin="normal"
            onChange={this.fieldChangeHandler('author')}
          />
          <TextField
            id="signal-field"
            label="Сигнал"
            value={rule.signal} 
            className={classes.field}
            margin="normal"
            onChange={this.fieldChangeHandler('signal')}
           />
          <TextField
            id="riskvalue-field"
            label="Значение риска"
            value={rule.riskValue}
            className={classes.field}
            onChange={this.fieldChangeHandler('riskValue')}
           />
          <TextField
            id="begindate-field"
            label="Дата С"
            value={rule.beginDate}
            className={classes.field} 
            margin="normal"
            onChange={this.fieldChangeHandler('beginDate')}
          />
          <TextField
            id="description-field"
            label="Описание"
            value={rule.description}
            className={classes.field} 
            margin="normal"
            onChange={this.fieldChangeHandler('description')}
          />
        </div>
        <div className={classes.container}>
          <TextField
            id="group-field"
            label="Группа"
            value={rule.group} 
            className={classes.field} 
            margin="normal"
            onChange={this.fieldChangeHandler('group')}
          />
          <TextField
            id="formula-field"
            label="Формула"
            value={rule.formula} 
            className={classes.field}
            margin="normal"
            onChange={this.fieldChangeHandler('formula')}
          />
          <TextField
            id="formulaU-field"
            label="Формула (U)"
            value={rule.formulaU} 
            className={classes.field} 
            margin="normal"
            onChange={this.fieldChangeHandler('formulaU')}
          />
          <TextField
            id="formulaP-field"
            label="Формула (P)"
            value={rule.formulaP} 
            className={classes.field} 
            margin="normal"
            onChange={this.fieldChangeHandler('formulaP')}
          />
          <TextField
            id="endDate-field"
            label="Дата По"
            value={rule.endDate} 
            className={classes.field} 
            margin="normal"
            onChange={this.fieldChangeHandler('endDate')}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    rule: state.rule
  }
}

export default connect(mapStateToProps)(withStyles(styles)(RuleDetails));
