function showMessage() {
  const messages = [
    "مرحباً بك في Hexa Core!",
    "نحن نبني المستقبل بعناية واحتراف.",
    "ابدأ رحلتك العقارية معنا اليوم!",
    "نستخدم أحدث تقنيات الذكاء الاصطناعي في خدماتنا."
  ];
  
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  alert(randomMsg);
}
