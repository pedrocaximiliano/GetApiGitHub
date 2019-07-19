import React, { Component } from 'react';
import './styles.css';
import { getApiCommits } from '../../services/api';
import moment from 'moment';

class commits extends Component{
    constructor(props) {
    super(props);
    this.state = {
        docs: [],
        errorApi: false,
    };
  }
     componentDidMount() {
        this.loadingCommits();
    };

    loadingCommits = async () => {
        const {value} =this.props.match.params;
        try {
        const response = await getApiCommits.get(`/${value.replace(":", "")}/commits`);
        this.setState({ 
            docs: response.data,
        })
        } catch (error) {
            this.setState({ 
                errorApi: true,
            })
        }
    }

    render() {
        const {docs, errorApi} = this.state;
        if (errorApi) {
            return (
                <div className="error-commits-list"> 
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
                <div>
                <div>
                    <div className='Amount-Commits'>
                        <article key={docs.node_id}>
                            <strong>Amount of commits: {docs.length}</strong>
                        </article>
                    </div>
                <div className="commits-list"> 
                    {docs.map((resp) =>
                        <article key={resp.commit.author.date}>
                            <strong>Commit date: <p>{moment(resp.commit.author.date).format('DD/MM/YYYY')}</p></strong>
                            <strong>Message: <p>{resp.commit.message}</p></strong>
                        </article>
                      )                    
                    }
                </div>
                </div>
            </div>
          </div>
        )
    }
}
export default commits;