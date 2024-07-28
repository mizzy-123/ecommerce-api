import multer from "multer";
import crypto from "crypto";
import path from "path";

const storageImage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/images");
    },
    filename: function (req, file, cb) {
        const randomName = crypto.randomBytes(20).toString("hex");
        const extension = path.extname(file.originalname);

        cb(null, `${randomName}${extension}`);
    },
});

export const uploadImage = multer({
    storage: storageImage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype.startsWith("image/")) {
            cb(null, true);
        } else {
            cb(null, false);
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
});
