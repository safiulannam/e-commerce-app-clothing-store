export const navOptions = [
    {
        id: "home",
        label: "Home",
        path: "/",
    },
    {
        id: "listing",
        label: "Semua Produk",
        path: "/product/listing/all-products",
    },
    {
        id: "listingMen",
        label: "Laki-laki",
        path: "/product/listing/men",
    },
    {
        id: "listingWomen",
        label: "Wanita",
        path: "/product/listing/women",
    },
    {
        id: "listingKids",
        label: "Anak-anak",
        path: "/product/listing/kids",
    },
];

export const adminNavOptions = [
    {
        id: "adminListing",
        label: "Kelola Semua Produk",
        path: "/admin-view/all-products",
    },
    {
        id: "adminNewProduct",
        label: "Tambahkan Produk Baru",
        path: "/admin-view/add-product",
    },
];

export const registrationFormControls = [
    {
        id: "name",
        type: "text",
        placeholder: "Masukkan nama Anda",
        label: "Nama",
        componentType: "input",
    },
    {
        id: "email",
        type: "email",
        placeholder: "Masukkan email Anda",
        label: "Email",
        componentType: "input",
    },
    {
        id: "password",
        type: "password",
        placeholder: "Masukkan kata sandi Anda",
        label: "Password",
        componentType: "input",
    },
    {
        id: "role",
        type: "",
        placeholder: "Pilih Role Anda",
        label: "Role",
        componentType: "select",
        options: [
            {
                id: "admin",
                label: "Admin",
            },
            {
                id: "customer",
                label: "Pelanggan",
            },
        ],
    },
];

export const loginFormControls = [
    {
        id: "email",
        type: "email",
        placeholder: "Masukkan email Anda",
        label: "Email",
        componentType: "input",
    },
    {
        id: "password",
        type: "password",
        placeholder: "Masukkan kata sandi Anda",
        label: "Password",
        componentType: "input",
    },
];

export const adminAddProductformControls = [
    {
        id: "name",
        type: "text",
        placeholder: "Masukkan nama",
        label: "Nama",
        componentType: "input",
    },
    {
        id: "price",
        type: "number",
        placeholder: "Masukkan harga",
        label: "Harga",
        componentType: "input",
    },
    {
        id: "description",
        type: "text",
        placeholder: "Masukkan deskripsi",
        label: "Deskripsi",
        componentType: "input",
    },
    {
        id: "category",
        type: "",
        placeholder: "",
        label: "Category",
        componentType: "select",
        options: [
            {
                id: "men",
                label: "Men",
            },
            {
                id: "women",
                label: "Women",
            },
            {
                id: "kids",
                label: "Kids",
            },
        ],
    },
    {
        id: "deliveryInfo",
        type: "text",
        placeholder: "Masukkan Info Pengiriman",
        label: "Info Pengiriman",
        componentType: "input",
    },
    {
        id: "onSale",
        type: "",
        placeholder: "",
        label: "On Sale",
        componentType: "select",
        options: [
            {
                id: "yes",
                label: "Yes",
            },
            {
                id: "no",
                label: "No",
            },
        ],
    },
    {
        id: "priceDrop",
        type: "number",
        placeholder: "Enter Price Drop",
        label: "Price Drop",
        componentType: "input",
    },
];

export const AvailableSizes = [
    {
        id: "s",
        label: "S",
    },
    {
        id: "m",
        label: "M",
    },
    {
        id: "l",
        label: "L",
    },
];

export const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    projectId: "PROJECT_ID",
    storageBucket: "STROAGE_BUCKET",
    messagingSenderId: "MESSAGING_SENDER_ID",
    appId: "APP_ID",
    measurementId: "MEASUREMENT_ID",
};

export const firebaseStroageURL = "YOUR_FIREBASE_STROAGE_URL";

export const addNewAddressFormControls = [
    {
        id: "fullName",
        type: "input",
        placeholder: "Enter your full name",
        label: "Full Name",
        componentType: "input",
    },
    {
        id: "address",
        type: "input",
        placeholder: "Enter your full address",
        label: "Address",
        componentType: "input",
    },
    {
        id: "city",
        type: "input",
        placeholder: "Enter your city",
        label: "City",
        componentType: "input",
    },
    {
        id: "country",
        type: "input",
        placeholder: "Enter your country",
        label: "Country",
        componentType: "input",
    },
    {
        id: "postalCode",
        type: "input",
        placeholder: "Enter your postal code",
        label: "Postal Code",
        componentType: "input",
    },
];