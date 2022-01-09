import ErrorStruct from "../interface/ErrorStruct"

// 设置配置文件
const config = {
    // 启动端口
    port: 3005,
    // 数据库配置
    database: {
        DATABASE: 'coffee',
        USERNAME: 'root',
        PASSWORD: '1234',
        PORT: '3306',
        HOST: 'localhost'
    },
    redis: {
        PORT: 6379
    },
    errorStruct: function (errorStruct:ErrorStruct):ErrorStruct {
        return errorStruct
    }

}

export default config