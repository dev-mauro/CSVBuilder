const extractImeiInfo = (info) => {
  
  // Crea un array de equipos a partir del string
  const {validIMEI, invalidIMEI} = buildDeviceInfoArray(info);

  // Agrupa los imei por modelo a partir del array
  const devices = groupDevicesByModel(validIMEI);

  return {devices, invalidIMEI};

}

// Construye un array con la información de los equipos a partir de un string
const buildDeviceInfoArray = (info) => {
  const validIMEI = [];
  const invalidIMEI = [];

  info = info.replaceAll('-', '');

  const deviceArray = info.split('\n');

  deviceArray.forEach( device => {
    if(device.trim() == "") return;

    const deviceInfo = device.split('\t');

    let [imei1, imei2, model, brand] = deviceInfo;

    if(brand)
      model = brand + " " + model;

    if(!isValidIMEI(imei1)){
      invalidIMEI.push({imei: imei1, model});
      imei1 = '';
    }

    if(!isValidIMEI(imei2)){
      invalidIMEI.push({imei: imei2, model});
      imei2 = '';
    }

    if(imei1 || imei2)
      validIMEI.push({
        imei1,
        imei2,
        model
      })
  })

  return {validIMEI, invalidIMEI};
}


const groupDevicesByModel = (deviceArray) => {
  const result = [];

  deviceArray.forEach(device => {
    const index = result.findIndex( e => e.model.replaceAll(' ', '') === formatString(device.model).replaceAll(' ', '') )

    // No existe registro de ese modelo en resultado, se crea el registro
    if( index === -1 ) {

      result.push({
        model: formatString(device.model),
        imeiList: device.imei2 != ""
          ? [device.imei1, device.imei2]
          : [device.imei1],
        saved: false,
        selected: false,
      });

    // Si existe registro, se añaden los imei a la lista
    } else {

      result[index].imeiList.push(device.imei1);
      (device.imei2 != "")
        ? result[index].imeiList.push(device.imei2)
        : "";
    }
  })

  return result;
}


const formatString = (string) => {
  string = string.toLowerCase().trim();
  string = string.replaceAll("  ", " ");
  string = string.replaceAll("   ", " ");
  string = string.replaceAll("    ", " ");

  return string;
}

const isValidIMEI = (imei) => {
  if(isNaN(imei) || (imei.length != 15 && imei.length != 0))
    return false;

  return true;
}

/*

[{
  model: 'samsung galaxy a12',
  imeiList: ['1312312', '123123123']
}]

*/


/*

355864120642756	357882490642758	samsung galaxy S21 FE
355864121392435	357882491392437	samsung galaxy S21 FE
355864121301055	357882491301057	samsung galaxy S21 FE
353842197724964	354708207724964	samsung galaxy A53
353842197951765	354708207951765	samsung galaxy A53
353842198211383	354708208211383	samsung galaxy A53
352286991819409	354122961819400	samsung galaxy A03 CORE
352286992043694	354122962043695	samsung galaxy A03 CORE
352286991964486	354122961964487	samsung galaxy A03 CORE
356795951980015	359612481980018	samsung galaxy A23
356795951894208	359612481894201	samsung galaxy A23
356795951955983	359612481955986	samsung galaxy A23
357418423914129		Samsung galaxy s21 ultra
356607101801274		iPhone 8
356607101928994		iPhone 8
356608101650893		iPhone 8
359928552955980	359928553205534	IPHONE 14 PRO MAX
351344359205835	351344356050069	IPHONE 14 PRO MAX
353294702946072	353294702831258	IPHONE  14 PRO 
353294703332900	353294702880099	IPHONE  14 PRO
356240870607654		IPHONE 14 PRO MAX
353061109255583	353061109372438	iPhone 11
358082909983369		iphone 13 mini
352228700936488		iPhone 14 Pro
862389053205583		xiaomi redmi note 10
868732051073269		xiaomi Mi Note 10


356729116440755		iPhone 12 Pro Max	Apple
352941883291881	352941883609322	Iphone 13	Apple
356200545770329	356200545701217	iphone 14 pro max	Apple
351372730981824		e7i power	Motorola
863328052700755	863328052700763	Redmi 9a	Xiaomi
869876055975166	869876055975174	Redmi 9	Xiaomi
867522041294401	867522043014401	redmi note 8	Xiaomi
860878030034290		ym258	HONGXUN
350633294732643	350727964732642	Galaxy A13	Samsung
350633294748540	350727964748549	Galaxy A13	Samsung
353810488293387	366546178293389	Galaxy a 22 5g	Samsung
353561160239202	353561160239210	Silver Max Lite	Kalley


355864120642756	357882490642758	samsung galaxy S21 FEs
355864121392435	357882491392437	samsung galaxy S21 FEs
355864121301055	357882491301057	samsung galaxy S21 FEs
353842197724964	354708207724964	samsung galaxy A53s
353842197951765	354708207951765	samsung galaxy A53s
353842198211383	354708208211383	samsung galaxy A53s
352286991819409	354122961819400	samsung galaxy A03 COREs
352286992043694	354122962043695	samsung galaxy A03 COREs
352286991964486	354122961964487	samsung galaxy A03 COREs
356795951980015	359612481980018	samsung galaxy A23s
356795951894208	359612481894201	samsung galaxy A23s
356795951955983	359612481955986	samsung galaxy A23s
357418423914129		Samsung galaxy s21 ultras
356607101801274		iPhone 8s
356607101928994		iPhone 8s
356608101650893		iPhone 8s
359928552955980	359928553205534	IPHONE 14 PRO MAXs
351344359205835	351344356050069	IPHONE 14 PRO MAXs
353294702946072	353294702831258	IPHONE  14 PRO s
353294703332900	353294702880099	IPHONE  14 PROs
356240870607654		IPHONE 14 PRO MAXs
353061109255583	353061109372438	iPhone 11s
358082909983369		iphone 13 minis
352228700936488		iPhone 14 Pros
862389053205583		xiaomi redmi note 10s
868732051073269		xiaomi Mi Note 10s

352286991819409	354122961819400	samsung galaxy A03 COREs
352286992043694	354122962043695	samsung galaxy A03 COREs
352286991964486	354122961964487	samsung galaxy A03 COREs
352286991819409	354122961819400	samsung galaxy A03 COREs
352286992043694	354122962043695	samsung galaxy A03 COREs
352286991964486	354122961964487	samsung galaxy A03 COREs
352286991819409	354122961819400	samsung galaxy A03 COREs
352286992043694	354122962043695	samsung galaxy A03 COREs
352286991964486	354122961964487	samsung galaxy A03 COREs
352286991819409	354122961819400	samsung galaxy A03 COREs
352286992043694	354122962043695	samsung galaxy A03 COREs
352286991964486	354122961964487	samsung galaxy A03 COREs



352286991819409	354122961819400	samsung galaxy A03 COREs
352286992043694	354122962043695	samsung galaxy A03 COREs
352286991964486	354122961964487	samsung galaxy A03 COREs

352286991819409	354122961819400	samsung galaxy A03 COREs
352286992043694	354122962043695	samsung galaxy A03 COREs
352286991964486	354122961964487	samsung galaxy A03 COREs
352286991819409	354122961819400	samsung galaxy A03 COREs
352286992043694	354122962043695	samsung galaxy A03 COREs
352286991964486	354122961964487	samsung galaxy A03 COREs
352286991819409	354122961819400	samsung galaxy A03 COREs
352286992043694	354122962043695	samsung galaxy A03 COREs
352286991964486	354122961964487	samsung galaxy A03 COREs
352286991819409	354122961819400	samsung galaxy A03 COREs
352286992043694	354122962043695	samsung galaxy A03 COREs
352286991964486	354122961964487	samsung galaxy A03 COREs
352286991819409	354122961819400	samsung galaxy A03 COREs
352286992043694	354122962043695	samsung galaxy A03 COREs
352286991964486	354122961964487	samsung galaxy A03 COREs
352286991819409	354122961819400	samsung galaxy A03 COREs
352286992043694	354122962043695	samsung galaxy A03 COREs
352286991964486	354122961964487	samsung galaxy A03 COREs
352286991819409	354122961819400	samsung galaxy A03 COREs
352286992043694	354122962043695	samsung galaxy A03 COREs
352286991964486	354122961964487	samsung galaxy A03 COREs

352286991819409	354122961819400	samsung galaxy A03 COREs
352286992043694	354122962043695	samsung galaxy A03 COREs
352286991964486	354122961964487	samsung galaxy A03 COREs


352286991819409	354122961819400	samsung galaxy A03 COREs
352286992043694	354122962043695	samsung galaxy A03 COREs
352286991964486	354122961964487	samsung galaxy A03 COREs




352286991819409	354122961819400	samsung galaxy A03 COREs
352286992043694	354122962043695	samsung galaxy A03 COREs
352286991964486	354122961964487	samsung galaxy A03 COREs
352286991819409	354122961819400	samsung galaxy A03 COREs
352286992043694	354122962043695	samsung galaxy A03 COREs
352286991964486	354122961964487	samsung galaxy A03 COREs
352286991819409	354122961819400	samsung galaxy A03 COREs
352286992043694	354122962043695	samsung galaxy A03 COREs
352286991964486	354122961964487	samsung galaxy A03 COREs
352286991819409	354122961819400	samsung galaxy A03 COREs
352286992043694	354122962043695	samsung galaxy A03 COREs
352286991964486	354122961964487	samsung galaxy A03 COREs

352286991819409	354122961819400	samsung galaxy A03 COREs
352286992043694	354122962043695	samsung galaxy A03 COREs
352286991964486	354122961964487	samsung galaxy A03 COREs
352286991819409	354122961819400	samsung galaxy A03 COREs
352286992043694	354122962043695	samsung galaxy A03 COREs
352286991964486	354122961964487	samsung galaxy A03 COREs
352286991819409	354122961819400	samsung galaxy A03 COREs
352286992043694	354122962043695	samsung galaxy A03 COREs
352286991964486	354122961964487	samsung galaxy A03 COREs
*/

export default extractImeiInfo;