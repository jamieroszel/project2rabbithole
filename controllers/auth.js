const getCreate = (req, res)=>{
    res.send("get create")
}

const createSubmit = (req, res)=>{
    res.send("SubmitCreate")
}

const getLogin = (req, res)=>{
    res.send("get login")
}

const loginSubmit = (req, res)=>{
    res.send("submit login")
}

module.exports = {
    getCreate,
    getLogin,
    createSubmit,
    loginSubmit
}