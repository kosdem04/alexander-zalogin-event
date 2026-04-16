import CTASection from "../components/CTASection";
import { mediaLinks } from "../data/mediaLinks";
import PageShell from "../components/PageShell";
import SectionTitle from "../components/SectionTitle";
import styles from "./GalaPage.module.css";

export default function GalaPage() {
  return (
    <PageShell className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroLayout}>
            <div className={styles.heroCard}>
              <span className={styles.badge}>Р“Р°Р»Р°-СѓР¶РёРЅС‹ Рё РєР»РёРµРЅС‚СЃРєРёРµ РІРµС‡РµСЂР°</span>
              <h1>РЎС‚Р°С‚СѓСЃРЅР°СЏ РїРѕРґР°С‡Р°, РІ РєРѕС‚РѕСЂРѕР№ РІРµРґСѓС‰РёР№ СЂР°Р±РѕС‚Р°РµС‚ РЅР° СѓСЂРѕРІРµРЅСЊ СЃРѕР±С‹С‚РёСЏ Рё Р±СЂРµРЅРґР°</h1>
              <p>
                Р—РґРµСЃСЊ РЅСѓР¶РµРЅ РґСЂСѓРіРѕР№ С‚РѕРЅ: СЃРґРµСЂР¶Р°РЅРЅС‹Р№, С‚РѕС‡РЅС‹Р№, РґРѕСЂРѕРіРѕР№ РїРѕ
                РѕС‰СѓС‰РµРЅРёСЋ. РЎС‚СЂР°РЅРёС†Р° СЃРґРµР»Р°РЅР° С‚РµРјРЅРµРµ, Р°РєРєСѓСЂР°С‚РЅРµРµ Рё Р±Р»РёР¶Рµ Рє
                РїСЂРµРјРёР°Р»СЊРЅРѕРјСѓ СЃРµРіРјРµРЅС‚Сѓ.
              </p>
            </div>
            <div className={styles.stageCard}>
              <video
                className={styles.sampleVideo}
                src={mediaLinks.reelsVideoUrl}
                controls
                preload="metadata"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <SectionTitle
            eyebrow="РџРѕРґС…РѕРґ"
            title="Р“Р°Р»Р°-СЃС‚СЂР°РЅРёС†Р° РЅРµ РґРѕР»Р¶РЅР° Р±С‹С‚СЊ РїРѕС…РѕР¶Р° РЅРё РЅР° СЃРІР°РґСЊР±Сѓ, РЅРё РЅР° РєРѕСЂРїРѕСЂР°С‚РёРІРЅСѓСЋ РІРµС‡РµСЂРёРЅРєСѓ"
            text="Р­С‚Рѕ РѕС‚РґРµР»СЊРЅС‹Р№ Р¶Р°РЅСЂ: РїСЂРёРіР»СѓС€РµРЅРЅР°СЏ РїР°Р»РёС‚СЂР°, С‡РёСЃС‚Р°СЏ РєРѕРјРїРѕР·РёС†РёСЏ, СѓРјРЅС‹Р№ С‚РµРєСЃС‚ Рё Р°РєС†РµРЅС‚ РЅР° С‚РѕРЅРєРѕСЃС‚Рё РІРµРґРµРЅРёСЏ."
          />
          <div className={styles.featureGrid}>
            <article className={styles.featureCard}>
              <h3>РЎРґРµСЂР¶Р°РЅРЅС‹Р№ С‚РѕРЅ</h3>
              <p>Р®РјРѕСЂ Рё РёРЅС‚РµСЂР°РєС‚РёРІС‹ РЅРµ РІС‹РїР°РґР°СЋС‚ РёР· СЃС‚Р°С‚СѓСЃР° СЃРѕР±С‹С‚РёСЏ Рё Р±СЂРµРЅРґР°.</p>
            </article>
            <article className={styles.featureCard}>
              <h3>Р Р°Р±РѕС‚Р° СЃ РїР°СЂС‚РЅРµСЂР°РјРё</h3>
              <p>Р’Р°Р¶РЅС‹ С‚РѕС‡РЅС‹Рµ С„РѕСЂРјСѓР»РёСЂРѕРІРєРё, СѓРІР°Р¶РµРЅРёРµ Рє РіРѕСЃС‚СЏРј Рё СЃС†РµРЅРёС‡РµСЃРєР°СЏ СЃРѕР±СЂР°РЅРЅРѕСЃС‚СЊ.</p>
            </article>
            <article className={styles.featureCard}>
              <h3>РџСЂРµРјРёР°Р»СЊРЅС‹Р№ РІРёР·СѓР°Р»</h3>
              <p>РўРµРјРЅС‹Рµ Р±Р»Р°РіРѕСЂРѕРґРЅС‹Рµ РѕС‚С‚РµРЅРєРё Рё Р»Р°РєРѕРЅРёС‡РЅС‹Рµ Р°РєС†РµРЅС‚С‹ СЂР°Р±РѕС‚Р°СЋС‚ РЅР° РІРѕСЃРїСЂРёСЏС‚РёРµ СѓСЃР»СѓРіРё.</p>
            </article>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="РЎС‚Р°С‚СѓСЃРЅС‹Р№ С„РѕСЂРјР°С‚"
        title="Р•СЃР»Рё РЅСѓР¶РµРЅ РІРµРґСѓС‰РёР№ РїРѕРґ РїСЂРµРјРёР°Р»СЊРЅС‹Р№ СѓР¶РёРЅ, РєР»РёРµРЅС‚СЃРєРёР№ РІРµС‡РµСЂ РёР»Рё С†РµСЂРµРјРѕРЅРёСЋ РЅР°РіСЂР°Р¶РґРµРЅРёСЏ"
        text="Р­С‚Р° СЃС‚СЂР°РЅРёС†Р° СѓР¶Рµ СЃРѕР±СЂР°РЅР° РєР°Рє РѕС‚РґРµР»СЊРЅС‹Р№ Р»РµРЅРґРёРЅРі РїРѕРґ РґРµР»РёРєР°С‚РЅС‹Рµ Рё СЃС‚Р°С‚СѓСЃРЅС‹Рµ РјРµСЂРѕРїСЂРёСЏС‚РёСЏ."
        primaryTo="/contacts"
        primaryLabel="РћС‚РїСЂР°РІРёС‚СЊ Р·Р°РїСЂРѕСЃ"
        secondaryTo="/corporate"
        secondaryLabel="Р’РµСЂРЅСѓС‚СЊСЃСЏ Рє РєРѕСЂРїРѕСЂР°С‚РёРІР°Рј"
        tone="dark"
      />
    </PageShell>
  );
}






