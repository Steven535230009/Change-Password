// Function untuk mengubah password user
async function changePassword(req, res, next) {
    const { id } = req.params;
    const { oldPassword, newPassword, newPasswordConfirm } = req.body;
    try {
        // Lakukan validasi password lama, password baru, dan konfirmasi password baru
        // ...

        // Lakukan proses penggantian password jika semua validasi berhasil
        // ...

        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        // Handle error jika terjadi kesalahan
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    changePassword,
};
