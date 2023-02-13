def func():
    allColours = list(data.values());
    coloursRaw = list(dict.fromkeys(allColours));
    coloursIso = coloursRaw;
    # print("\n".join(coloursRaw));
    for i in coloursRaw:
        a = 0;
        while True:
            if a >= len(coloursIso) or "#" in i: break;
            # if (i == "11,20,26"): print(i, coloursIso[a], i in coloursIso[a] and i != coloursIso[a] and not "#" in coloursIso[a]);
            if i in coloursIso[a] and i != coloursIso[a] and not "#" in coloursIso[a]:
                # print(i, coloursIso[a], a);
                coloursIso.remove(coloursIso[a]);
                # print(i, coloursIso[a], a);
            else: a += 1;
    
    coloursFreq = {};

    for iIso in coloursIso:
        cnt = 0;
        for iRaw in allColours:
            cnt += (iIso in iRaw);
            # print(iIso, iRaw);
        coloursFreq[iIso] = cnt;
    print("\n".join(["{} {}".format(i, coloursFreq[i]) for i in coloursFreq]));

    def sortKey(e):
        return coloursFreq[e];

    # coloursIsoDict = {};
    # for i in range(len(coloursIso)):
    #     if "#" in coloursIso[i]: colourKey = "--test-{}-{}".format("hex", i);
    #     else: colourKey = "--test-{}-{}".format("rgb", i);
        
    #     coloursIsoDict[coloursIso[i]] = colourKey;
        
    #     for idata in data:
    #         if coloursIso[i] in data[idata]:
    #             data[idata] = data[idata].replace(coloursIso[i],"var({})".format(colourKey));
    
    coloursFreqDict = {};

    n = 0;

    for i in sorted(coloursFreq, key=sortKey, reverse=True): # mistake as this list is sorted and hence does not correspond with the unsorted list
        if "#" in i: colourKey = "--test-{}-{}".format("hex", n);
        else: colourKey = "--test-{}-{}".format("rgb", n);
        coloursFreqDict[colourKey] = [i, coloursFreq[i]];


        for idata in data:
            if i in data[idata]:
                print(colourKey);
                data[idata] = data[idata].replace(i,"var({})".format(colourKey));

        n += 1;
    
    coloursIsoHex = {};
    coloursIsoRgb = {};
    
    for clr in coloursFreqDict:
        if "#" in coloursFreqDict[clr][0]: coloursIsoHex[clr] = coloursFreqDict[clr];
        else: coloursIsoRgb[clr] = coloursFreqDict[clr];
            # print(idata, data[idata]);
    # print("\n\n" + "\n".join(coloursIsoRgb.values()));
    # print("\n\n" + "\n".join(coloursIsoHex.values()));
    with open("testOutput.css", "w") as fout:
        fout.write(":root {\n\t" + "\n\t".join(["{}: {}; \t/* freq: {} */".format(i, coloursIsoHex[i][0], coloursIsoHex[i][1]) for i in coloursIsoHex]) + "\n\t" + "\n\t".join(["{}: {}; \t/* freq: {} */".format(i, coloursIsoRgb[i][0], coloursIsoRgb[i][1]) for i in coloursIsoRgb]) + "\n}" + "\n\nbody.web {\n\t" + "\n\t".join(["{}: {};".format(key, data[key]) for key in data]) + "\n}");
        fout.close();
    # for i in data:


with open("whatsapp-styles.css", "r") as fin:
    datList = [i.split(": ") for i in fin.read().split("\n")[1:-1]];
    data = {};
    for a in datList:
        data[a[0].replace("    ", "")] = a[1].replace(";", "");
    # print("\n".join(["{} : {}".format(a[0].replace("    ", ""), a[1].replace(";", "")) for a in datList]));
    func();
    fin.close();