const output = {
    home : (req, res) => {
        res.render('home/index')
    },
    login :  (req, res) => {
        res.render('home/login')
    },
}

const users = {
    id : ['tree', 'dudwnd'],
    passwd : ['1234', '1234']
}

const process = {
    login : (req, res) => {
        const id = req.body.id
        const passwd = req.body.passwd

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.passwd[idx] === passwd)  {
                return res.json({
                    success : true,
                })
            }
        }

        return res.json({
            success : false,
            msg: "로그인에 실패하셨습니다."
        })
    }
}

module.exports = {
    output,
    process
}