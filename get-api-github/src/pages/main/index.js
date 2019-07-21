import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import * as constants from '../../util/constants';
import { getApiRepos } from '../../services/api';

class Main extends Component{
    constructor(props) {
    super(props);
    this.state = {
        docs: [],
        errorAPI: false,
    };
  }
    componentDidMount() {
        this.loadingRepos();
    };
  
    loadingRepos = async () => {
     try {
       const response = await getApiRepos.get();
       this.setState({ 
        docs: response.data,
        loading: false,
    })
     } catch (error) {
        this.setState({ 
            errorAPI: true,
        })
     }
    }
    render() {
        const { errorAPI, docs} = this.state;
        if (errorAPI) {
            return (
                <div className="error-repos-list"> 
                    <div>
                    <div>
                        <article>
                            <strong> Error loading screen </strong>
                        </article>
                    </div>
                    </div>
                </div>
            )
        } 
            return (
                <div>
                    <div className="repos-list"> 
                    <div>
                        {docs.map((resp) =>
                        <article key={resp.node_id} >
                            <div  className="perfil">
                                <strong><p><img className="img" src={resp.owner.avatar_url}/></p></strong>
                                <strong>User Name: <p>{ resp.owner.login}</p></strong>
                            </div>
                            <strong >Repository Name:<p>{resp.name}</p></strong>
                            <strong>Discrption:<p>{resp.description}</p></strong>
                            <strong >date: <p>{moment(resp.created_at).format('DD/MM/YYYY')}</p></strong>
                            <div className="actions">
                                <Link to={constants.Commits(resp.name)}>Access</Link>
                            </div>
                        </article>
                        
                        )}
                    </div>
                </div>
              </div>
            )
        }
}
export default Main;