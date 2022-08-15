const model = require("./model");

module.exports = {
    PUT_PHONE: async (req, res) => {
        try {
            const {body} = req;
            console.log(body)
            const updatePhoneNum = await model.updatePhoneNum(body.phone_number);

            if (!updatePhoneNum)
                return res.status(500).json({message: "SERVER_update_ERROR!"});
            res.status(200).json({message: "updated_phone_number", data: updatePhoneNum});

        } catch (error) {
            res.status(500).json({message: "SERVER_ERROR!"})
        }
    },
    PUT_SITE_ADDRESS: async (req, res) => {
        try {
            const {body} = req;
            console.log(body)
            const updateAddress = await model.updateAddress(body.address, body.address_uz);

            if (!updateAddress)
                return res.status(500).json({message: "SERVER_update_ERROR!"});
            res.status(200).json({message: "updated_address", data: updateAddress});

        } catch (error) {
            res.status(500).json({message: "SERVER_ERROR!"})
        }
    },
    PUT_SITE_TIME: async (req, res) => {
        try {
            const {body} = req;
            console.log(body)
            const updateWokTime = await model.updateWokTime(body.work_time, body.work_uz_time);

            if (!updateWokTime)
                return res.status(500).json({message: "SERVER_update_ERROR!"});
            res.status(200).json({message: "updated_WokTime", data: updateWokTime});

        } catch (error) {
            res.status(500).json({message: "SERVER_ERROR!"})
        }
    },
    PUT_SITE_TELEGRAM: async (req, res) => {
        try {
            const {body} = req;
            console.log(body)
            const updateTelegram = await model.updateTelegram(body.telegram_link);

            if (!updateTelegram)
                return res.status(500).json({message: "SERVER_update_ERROR!"});
            res.status(200).json({message: "updated_Telegram_link", data: updateTelegram});

        } catch (error) {
            res.status(500).json({message: "SERVER_ERROR!"})
        }
    },
    PUT_SITE_INSTAGRAM: async (req, res) => {
        try {
            const {body} = req;
            console.log(body)
            const updateInstagram = await model.updateT(body.instagram_link);

            if (!updateInstagram)
                return res.status(500).json({message: "SERVER_update_ERROR!"});
            res.status(200).json({message: "updated_Instagram_link", data: updateInstagram});

        } catch (error) {
            res.status(500).json({message: "SERVER_ERROR!"})
        }
    },
}