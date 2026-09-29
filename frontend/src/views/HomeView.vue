<template>
    <div class="home">
        <header class="header">
            <h1>Hello, Selamat Datang di MAPELA!</h1>
            <h2>Media Pembelajaran Interaktif untuk Anak-anak</h2>
            <h3>Hari ini mau belajar apa?</h3>
        </header>
        <main class="main">
            <div class="mapela-grid">
                <div class="mapela-card"
                @click="navigateTo('/matematika')">
                    <h4>Matematika</h4>
                    <p>Belajar angka dan operasi dasar</p>
                </div>
                <div class="mapela-card"
                @click="navigateTo('/ipa')">
                    <h4>IPA</h4>
                    <p>Menjelajahi dunia alam dan ilmu pengetahuan</p>
                </div>
                <div class="mapela-card"
                @click="navigateTo('/bahasa-indonesia')">
                    <h4>Bahasa Indonesia</h4>
                    <p>Mengembangkan kemampuan membaca dan menulis</p>
                </div>
                <div class="mapela-card"
                @click="navigateTo('/numbers')">
                    <h4>Latihan Matematika</h4>
                    <p>Latihan soal-soal matematika</p>
                </div>
                <div class="mapela-card"
                @click="navigateTo('/letters')">
                    <h4>Latihan Letters</h4>
                    <p>Latihan soal-soal huruf</p>
                </div>
                <div class="mapela-card"
                @click="navigateTo('/colors')">
                    <h4>Latihan Colors</h4>
                    <p>Latihan soal-soal warna</p>
                </div>
            </div>
        </main>
        <!-- Footer 
        <footer class="footer">
            <p>&copy; 2026 WanDev. All rights reserved.</p>
        </footer>
        -->
    </div>
</template>

<script>
import { useRouter } from 'vue-router';


export default {
    name: 'HomeView',
    setup() {
        const router = useRouter();
        return {
            router
        };
    }
};
</script>

<style scoped>
.mapela-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    gap: 20px;
}

.mapela-card {
    border: 1px solid #ccc;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.2s;
}
</style>