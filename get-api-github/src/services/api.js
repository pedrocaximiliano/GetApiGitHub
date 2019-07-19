import axios from 'axios';
import * as constants from '../util/constants'

export const getApiRepos = axios.create({ baseURL: `https://api.github.com/users/${constants.userName}/repos`})

export const getApiCommits = axios.create({ baseURL: `https://api.github.com/repos/${constants.userName}`});
