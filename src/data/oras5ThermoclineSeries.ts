// Extracted and validated from src/data/raw/ORAS5_Thermocline_Cleaned_1958_2025_No_Readme.xlsx
// Single location: 0°N, 110°W
// Variable: Depth of 20°C isotherm
// CAVEAT: Units unconfirmed in source header ('source value; confirm units'). Not labelled as metres.
// Period: Jan 1958 - Nov 2025 (815 monthly observations unbroken, 0 missing)

export interface ThermoclinePoint {
  date: string;
  year: number;
  month: number;
  depth: number;
}

export const oras5ThermoclineSeries: ThermoclinePoint[] = [
  {
    "date": "1958-01",
    "year": 1958,
    "month": 1,
    "depth": 74.744
  },
  {
    "date": "1958-02",
    "year": 1958,
    "month": 2,
    "depth": 94.6869
  },
  {
    "date": "1958-03",
    "year": 1958,
    "month": 3,
    "depth": 75.1673
  },
  {
    "date": "1958-04",
    "year": 1958,
    "month": 4,
    "depth": 69.4887
  },
  {
    "date": "1958-05",
    "year": 1958,
    "month": 5,
    "depth": 45.3264
  },
  {
    "date": "1958-06",
    "year": 1958,
    "month": 6,
    "depth": 39.6147
  },
  {
    "date": "1958-07",
    "year": 1958,
    "month": 7,
    "depth": 35.9101
  },
  {
    "date": "1958-08",
    "year": 1958,
    "month": 8,
    "depth": 42.6568
  },
  {
    "date": "1958-09",
    "year": 1958,
    "month": 9,
    "depth": 31.9566
  },
  {
    "date": "1958-10",
    "year": 1958,
    "month": 10,
    "depth": 39.9085
  },
  {
    "date": "1958-11",
    "year": 1958,
    "month": 11,
    "depth": 47.9496
  },
  {
    "date": "1958-12",
    "year": 1958,
    "month": 12,
    "depth": 53.6626
  },
  {
    "date": "1959-01",
    "year": 1959,
    "month": 1,
    "depth": 75.3023
  },
  {
    "date": "1959-02",
    "year": 1959,
    "month": 2,
    "depth": 91.4875
  },
  {
    "date": "1959-03",
    "year": 1959,
    "month": 3,
    "depth": 94.9778
  },
  {
    "date": "1959-04",
    "year": 1959,
    "month": 4,
    "depth": 84.01
  },
  {
    "date": "1959-05",
    "year": 1959,
    "month": 5,
    "depth": 67.5934
  },
  {
    "date": "1959-06",
    "year": 1959,
    "month": 6,
    "depth": 48.34
  },
  {
    "date": "1959-07",
    "year": 1959,
    "month": 7,
    "depth": 32.2983
  },
  {
    "date": "1959-08",
    "year": 1959,
    "month": 8,
    "depth": 32.9305
  },
  {
    "date": "1959-09",
    "year": 1959,
    "month": 9,
    "depth": 44.2532
  },
  {
    "date": "1959-10",
    "year": 1959,
    "month": 10,
    "depth": 49.2792
  },
  {
    "date": "1959-11",
    "year": 1959,
    "month": 11,
    "depth": 62.0325
  },
  {
    "date": "1959-12",
    "year": 1959,
    "month": 12,
    "depth": 63.6809
  },
  {
    "date": "1960-01",
    "year": 1960,
    "month": 1,
    "depth": 58.2178
  },
  {
    "date": "1960-02",
    "year": 1960,
    "month": 2,
    "depth": 77.8378
  },
  {
    "date": "1960-03",
    "year": 1960,
    "month": 3,
    "depth": 69.0097
  },
  {
    "date": "1960-04",
    "year": 1960,
    "month": 4,
    "depth": 71.7109
  },
  {
    "date": "1960-05",
    "year": 1960,
    "month": 5,
    "depth": 70.4037
  },
  {
    "date": "1960-06",
    "year": 1960,
    "month": 6,
    "depth": 57.5368
  },
  {
    "date": "1960-07",
    "year": 1960,
    "month": 7,
    "depth": 46.9579
  },
  {
    "date": "1960-08",
    "year": 1960,
    "month": 8,
    "depth": 46.6468
  },
  {
    "date": "1960-09",
    "year": 1960,
    "month": 9,
    "depth": 32.3089
  },
  {
    "date": "1960-10",
    "year": 1960,
    "month": 10,
    "depth": 26.0498
  },
  {
    "date": "1960-11",
    "year": 1960,
    "month": 11,
    "depth": 47.874
  },
  {
    "date": "1960-12",
    "year": 1960,
    "month": 12,
    "depth": 51.9664
  },
  {
    "date": "1961-01",
    "year": 1961,
    "month": 1,
    "depth": 68.1468
  },
  {
    "date": "1961-02",
    "year": 1961,
    "month": 2,
    "depth": 89.7033
  },
  {
    "date": "1961-03",
    "year": 1961,
    "month": 3,
    "depth": 87.6371
  },
  {
    "date": "1961-04",
    "year": 1961,
    "month": 4,
    "depth": 80.4177
  },
  {
    "date": "1961-05",
    "year": 1961,
    "month": 5,
    "depth": 67.0012
  },
  {
    "date": "1961-06",
    "year": 1961,
    "month": 6,
    "depth": 43.2634
  },
  {
    "date": "1961-07",
    "year": 1961,
    "month": 7,
    "depth": 35.5445
  },
  {
    "date": "1961-08",
    "year": 1961,
    "month": 8,
    "depth": 34.4489
  },
  {
    "date": "1961-09",
    "year": 1961,
    "month": 9,
    "depth": 27.0742
  },
  {
    "date": "1961-10",
    "year": 1961,
    "month": 10,
    "depth": 23.4709
  },
  {
    "date": "1961-11",
    "year": 1961,
    "month": 11,
    "depth": 43.6346
  },
  {
    "date": "1961-12",
    "year": 1961,
    "month": 12,
    "depth": 55.9372
  },
  {
    "date": "1962-01",
    "year": 1962,
    "month": 1,
    "depth": 49.0248
  },
  {
    "date": "1962-02",
    "year": 1962,
    "month": 2,
    "depth": 52.7421
  },
  {
    "date": "1962-03",
    "year": 1962,
    "month": 3,
    "depth": 63.0616
  },
  {
    "date": "1962-04",
    "year": 1962,
    "month": 4,
    "depth": 64.1516
  },
  {
    "date": "1962-05",
    "year": 1962,
    "month": 5,
    "depth": 44.347
  },
  {
    "date": "1962-06",
    "year": 1962,
    "month": 6,
    "depth": 36.051
  },
  {
    "date": "1962-07",
    "year": 1962,
    "month": 7,
    "depth": 46.4502
  },
  {
    "date": "1962-08",
    "year": 1962,
    "month": 8,
    "depth": 42.2278
  },
  {
    "date": "1962-09",
    "year": 1962,
    "month": 9,
    "depth": 50.5807
  },
  {
    "date": "1962-10",
    "year": 1962,
    "month": 10,
    "depth": 54.7286
  },
  {
    "date": "1962-11",
    "year": 1962,
    "month": 11,
    "depth": 53.925
  },
  {
    "date": "1962-12",
    "year": 1962,
    "month": 12,
    "depth": 51.9467
  },
  {
    "date": "1963-01",
    "year": 1963,
    "month": 1,
    "depth": 69.7129
  },
  {
    "date": "1963-02",
    "year": 1963,
    "month": 2,
    "depth": 76.3007
  },
  {
    "date": "1963-03",
    "year": 1963,
    "month": 3,
    "depth": 81.0299
  },
  {
    "date": "1963-04",
    "year": 1963,
    "month": 4,
    "depth": 85.2603
  },
  {
    "date": "1963-05",
    "year": 1963,
    "month": 5,
    "depth": 97.3537
  },
  {
    "date": "1963-06",
    "year": 1963,
    "month": 6,
    "depth": 102.872
  },
  {
    "date": "1963-07",
    "year": 1963,
    "month": 7,
    "depth": 98.8854
  },
  {
    "date": "1963-08",
    "year": 1963,
    "month": 8,
    "depth": 61.2382
  },
  {
    "date": "1963-09",
    "year": 1963,
    "month": 9,
    "depth": 55.4818
  },
  {
    "date": "1963-10",
    "year": 1963,
    "month": 10,
    "depth": 81.7397
  },
  {
    "date": "1963-11",
    "year": 1963,
    "month": 11,
    "depth": 94.2268
  },
  {
    "date": "1963-12",
    "year": 1963,
    "month": 12,
    "depth": 98.1186
  },
  {
    "date": "1964-01",
    "year": 1964,
    "month": 1,
    "depth": 96.3501
  },
  {
    "date": "1964-02",
    "year": 1964,
    "month": 2,
    "depth": 95.2894
  },
  {
    "date": "1964-03",
    "year": 1964,
    "month": 3,
    "depth": 68.0153
  },
  {
    "date": "1964-04",
    "year": 1964,
    "month": 4,
    "depth": 29.4778
  },
  {
    "date": "1964-05",
    "year": 1964,
    "month": 5,
    "depth": 25.8032
  },
  {
    "date": "1964-06",
    "year": 1964,
    "month": 6,
    "depth": 30.397
  },
  {
    "date": "1964-07",
    "year": 1964,
    "month": 7,
    "depth": 34.0329
  },
  {
    "date": "1964-08",
    "year": 1964,
    "month": 8,
    "depth": 25.2732
  },
  {
    "date": "1964-09",
    "year": 1964,
    "month": 9,
    "depth": 23.0341
  },
  {
    "date": "1964-10",
    "year": 1964,
    "month": 10,
    "depth": 28.282
  },
  {
    "date": "1964-11",
    "year": 1964,
    "month": 11,
    "depth": 42.1442
  },
  {
    "date": "1964-12",
    "year": 1964,
    "month": 12,
    "depth": 39.3929
  },
  {
    "date": "1965-01",
    "year": 1965,
    "month": 1,
    "depth": 80.3804
  },
  {
    "date": "1965-02",
    "year": 1965,
    "month": 2,
    "depth": 106.5593
  },
  {
    "date": "1965-03",
    "year": 1965,
    "month": 3,
    "depth": 110.4149
  },
  {
    "date": "1965-04",
    "year": 1965,
    "month": 4,
    "depth": 102.089
  },
  {
    "date": "1965-05",
    "year": 1965,
    "month": 5,
    "depth": 91.0315
  },
  {
    "date": "1965-06",
    "year": 1965,
    "month": 6,
    "depth": 73.0159
  },
  {
    "date": "1965-07",
    "year": 1965,
    "month": 7,
    "depth": 70.2986
  },
  {
    "date": "1965-08",
    "year": 1965,
    "month": 8,
    "depth": 81.4692
  },
  {
    "date": "1965-09",
    "year": 1965,
    "month": 9,
    "depth": 88.2468
  },
  {
    "date": "1965-10",
    "year": 1965,
    "month": 10,
    "depth": 89.1417
  },
  {
    "date": "1965-11",
    "year": 1965,
    "month": 11,
    "depth": 86.6224
  },
  {
    "date": "1965-12",
    "year": 1965,
    "month": 12,
    "depth": 94.334
  },
  {
    "date": "1966-01",
    "year": 1966,
    "month": 1,
    "depth": 89.549
  },
  {
    "date": "1966-02",
    "year": 1966,
    "month": 2,
    "depth": 89.159
  },
  {
    "date": "1966-03",
    "year": 1966,
    "month": 3,
    "depth": 81.5136
  },
  {
    "date": "1966-04",
    "year": 1966,
    "month": 4,
    "depth": 65.1236
  },
  {
    "date": "1966-05",
    "year": 1966,
    "month": 5,
    "depth": 48.8195
  },
  {
    "date": "1966-06",
    "year": 1966,
    "month": 6,
    "depth": 59.4171
  },
  {
    "date": "1966-07",
    "year": 1966,
    "month": 7,
    "depth": 50.5733
  },
  {
    "date": "1966-08",
    "year": 1966,
    "month": 8,
    "depth": 36.4496
  },
  {
    "date": "1966-09",
    "year": 1966,
    "month": 9,
    "depth": 26.5262
  },
  {
    "date": "1966-10",
    "year": 1966,
    "month": 10,
    "depth": 30.0284
  },
  {
    "date": "1966-11",
    "year": 1966,
    "month": 11,
    "depth": 42.7196
  },
  {
    "date": "1966-12",
    "year": 1966,
    "month": 12,
    "depth": 35.1264
  },
  {
    "date": "1967-01",
    "year": 1967,
    "month": 1,
    "depth": 48.8148
  },
  {
    "date": "1967-02",
    "year": 1967,
    "month": 2,
    "depth": 51.3297
  },
  {
    "date": "1967-03",
    "year": 1967,
    "month": 3,
    "depth": 41.8855
  },
  {
    "date": "1967-04",
    "year": 1967,
    "month": 4,
    "depth": 42.1941
  },
  {
    "date": "1967-05",
    "year": 1967,
    "month": 5,
    "depth": 46.8818
  },
  {
    "date": "1967-06",
    "year": 1967,
    "month": 6,
    "depth": 43.1601
  },
  {
    "date": "1967-07",
    "year": 1967,
    "month": 7,
    "depth": 39.2091
  },
  {
    "date": "1967-08",
    "year": 1967,
    "month": 8,
    "depth": 17.5889
  },
  {
    "date": "1967-09",
    "year": 1967,
    "month": 9,
    "depth": 14.6497
  },
  {
    "date": "1967-10",
    "year": 1967,
    "month": 10,
    "depth": 40.2821
  },
  {
    "date": "1967-11",
    "year": 1967,
    "month": 11,
    "depth": 54.312
  },
  {
    "date": "1967-12",
    "year": 1967,
    "month": 12,
    "depth": 59.6753
  },
  {
    "date": "1968-01",
    "year": 1968,
    "month": 1,
    "depth": 69.4112
  },
  {
    "date": "1968-02",
    "year": 1968,
    "month": 2,
    "depth": 56.3123
  },
  {
    "date": "1968-03",
    "year": 1968,
    "month": 3,
    "depth": 54.9074
  },
  {
    "date": "1968-04",
    "year": 1968,
    "month": 4,
    "depth": 66.0992
  },
  {
    "date": "1968-05",
    "year": 1968,
    "month": 5,
    "depth": 62.3318
  },
  {
    "date": "1968-06",
    "year": 1968,
    "month": 6,
    "depth": 75.0013
  },
  {
    "date": "1968-07",
    "year": 1968,
    "month": 7,
    "depth": 67.5394
  },
  {
    "date": "1968-08",
    "year": 1968,
    "month": 8,
    "depth": 45.2168
  },
  {
    "date": "1968-09",
    "year": 1968,
    "month": 9,
    "depth": 65.0347
  },
  {
    "date": "1968-10",
    "year": 1968,
    "month": 10,
    "depth": 81.7666
  },
  {
    "date": "1968-11",
    "year": 1968,
    "month": 11,
    "depth": 85.6588
  },
  {
    "date": "1968-12",
    "year": 1968,
    "month": 12,
    "depth": 92.3771
  },
  {
    "date": "1969-01",
    "year": 1969,
    "month": 1,
    "depth": 90.2015
  },
  {
    "date": "1969-02",
    "year": 1969,
    "month": 2,
    "depth": 96.9878
  },
  {
    "date": "1969-03",
    "year": 1969,
    "month": 3,
    "depth": 100.2286
  },
  {
    "date": "1969-04",
    "year": 1969,
    "month": 4,
    "depth": 99.6349
  },
  {
    "date": "1969-05",
    "year": 1969,
    "month": 5,
    "depth": 80.2834
  },
  {
    "date": "1969-06",
    "year": 1969,
    "month": 6,
    "depth": 65.321
  },
  {
    "date": "1969-07",
    "year": 1969,
    "month": 7,
    "depth": 38.3426
  },
  {
    "date": "1969-08",
    "year": 1969,
    "month": 8,
    "depth": 47.4758
  },
  {
    "date": "1969-09",
    "year": 1969,
    "month": 9,
    "depth": 53.5759
  },
  {
    "date": "1969-10",
    "year": 1969,
    "month": 10,
    "depth": 64.8222
  },
  {
    "date": "1969-11",
    "year": 1969,
    "month": 11,
    "depth": 66.9323
  },
  {
    "date": "1969-12",
    "year": 1969,
    "month": 12,
    "depth": 58.2115
  },
  {
    "date": "1970-01",
    "year": 1970,
    "month": 1,
    "depth": 58.6923
  },
  {
    "date": "1970-02",
    "year": 1970,
    "month": 2,
    "depth": 63.2164
  },
  {
    "date": "1970-03",
    "year": 1970,
    "month": 3,
    "depth": 45.2519
  },
  {
    "date": "1970-04",
    "year": 1970,
    "month": 4,
    "depth": 43.5224
  },
  {
    "date": "1970-05",
    "year": 1970,
    "month": 5,
    "depth": 29.0016
  },
  {
    "date": "1970-06",
    "year": 1970,
    "month": 6,
    "depth": 11.4706
  },
  {
    "date": "1970-07",
    "year": 1970,
    "month": 7,
    "depth": 0.8147
  },
  {
    "date": "1970-08",
    "year": 1970,
    "month": 8,
    "depth": 4.133
  },
  {
    "date": "1970-09",
    "year": 1970,
    "month": 9,
    "depth": 19.7852
  },
  {
    "date": "1970-10",
    "year": 1970,
    "month": 10,
    "depth": 25.1109
  },
  {
    "date": "1970-11",
    "year": 1970,
    "month": 11,
    "depth": 14.1728
  },
  {
    "date": "1970-12",
    "year": 1970,
    "month": 12,
    "depth": 8.37
  },
  {
    "date": "1971-01",
    "year": 1971,
    "month": 1,
    "depth": 33.1502
  },
  {
    "date": "1971-02",
    "year": 1971,
    "month": 2,
    "depth": 45.6456
  },
  {
    "date": "1971-03",
    "year": 1971,
    "month": 3,
    "depth": 64.0689
  },
  {
    "date": "1971-04",
    "year": 1971,
    "month": 4,
    "depth": 57.1308
  },
  {
    "date": "1971-05",
    "year": 1971,
    "month": 5,
    "depth": 33.6268
  },
  {
    "date": "1971-06",
    "year": 1971,
    "month": 6,
    "depth": 40.2833
  },
  {
    "date": "1971-07",
    "year": 1971,
    "month": 7,
    "depth": 39.8632
  },
  {
    "date": "1971-08",
    "year": 1971,
    "month": 8,
    "depth": 26.3256
  },
  {
    "date": "1971-09",
    "year": 1971,
    "month": 9,
    "depth": 42.7264
  },
  {
    "date": "1971-10",
    "year": 1971,
    "month": 10,
    "depth": 39.8851
  },
  {
    "date": "1971-11",
    "year": 1971,
    "month": 11,
    "depth": 39.4521
  },
  {
    "date": "1971-12",
    "year": 1971,
    "month": 12,
    "depth": 42.2511
  },
  {
    "date": "1972-01",
    "year": 1972,
    "month": 1,
    "depth": 75.5293
  },
  {
    "date": "1972-02",
    "year": 1972,
    "month": 2,
    "depth": 85.3552
  },
  {
    "date": "1972-03",
    "year": 1972,
    "month": 3,
    "depth": 86.2547
  },
  {
    "date": "1972-04",
    "year": 1972,
    "month": 4,
    "depth": 93.8695
  },
  {
    "date": "1972-05",
    "year": 1972,
    "month": 5,
    "depth": 108.4588
  },
  {
    "date": "1972-06",
    "year": 1972,
    "month": 6,
    "depth": 98.8131
  },
  {
    "date": "1972-07",
    "year": 1972,
    "month": 7,
    "depth": 101.9805
  },
  {
    "date": "1972-08",
    "year": 1972,
    "month": 8,
    "depth": 90.2074
  },
  {
    "date": "1972-09",
    "year": 1972,
    "month": 9,
    "depth": 93.9007
  },
  {
    "date": "1972-10",
    "year": 1972,
    "month": 10,
    "depth": 97.745
  },
  {
    "date": "1972-11",
    "year": 1972,
    "month": 11,
    "depth": 109.7546
  },
  {
    "date": "1972-12",
    "year": 1972,
    "month": 12,
    "depth": 109.0872
  },
  {
    "date": "1973-01",
    "year": 1973,
    "month": 1,
    "depth": 83.2597
  },
  {
    "date": "1973-02",
    "year": 1973,
    "month": 2,
    "depth": 64.382
  },
  {
    "date": "1973-03",
    "year": 1973,
    "month": 3,
    "depth": 50.5759
  },
  {
    "date": "1973-04",
    "year": 1973,
    "month": 4,
    "depth": 32.1992
  },
  {
    "date": "1973-05",
    "year": 1973,
    "month": 5,
    "depth": 31.1131
  },
  {
    "date": "1973-06",
    "year": 1973,
    "month": 6,
    "depth": 22.2633
  },
  {
    "date": "1973-07",
    "year": 1973,
    "month": 7,
    "depth": 11.9728
  },
  {
    "date": "1973-08",
    "year": 1973,
    "month": 8,
    "depth": 11.1556
  },
  {
    "date": "1973-09",
    "year": 1973,
    "month": 9,
    "depth": 18.1724
  },
  {
    "date": "1973-10",
    "year": 1973,
    "month": 10,
    "depth": 16.3137
  },
  {
    "date": "1973-11",
    "year": 1973,
    "month": 11,
    "depth": 19.936
  },
  {
    "date": "1973-12",
    "year": 1973,
    "month": 12,
    "depth": 13.9665
  },
  {
    "date": "1974-01",
    "year": 1974,
    "month": 1,
    "depth": 34.9972
  },
  {
    "date": "1974-02",
    "year": 1974,
    "month": 2,
    "depth": 37.1738
  },
  {
    "date": "1974-03",
    "year": 1974,
    "month": 3,
    "depth": 51.8115
  },
  {
    "date": "1974-04",
    "year": 1974,
    "month": 4,
    "depth": 64.1589
  },
  {
    "date": "1974-05",
    "year": 1974,
    "month": 5,
    "depth": 74.8854
  },
  {
    "date": "1974-06",
    "year": 1974,
    "month": 6,
    "depth": 50.6038
  },
  {
    "date": "1974-07",
    "year": 1974,
    "month": 7,
    "depth": 48.0522
  },
  {
    "date": "1974-08",
    "year": 1974,
    "month": 8,
    "depth": 42.1115
  },
  {
    "date": "1974-09",
    "year": 1974,
    "month": 9,
    "depth": 39.0899
  },
  {
    "date": "1974-10",
    "year": 1974,
    "month": 10,
    "depth": 33.7344
  },
  {
    "date": "1974-11",
    "year": 1974,
    "month": 11,
    "depth": 25.9005
  },
  {
    "date": "1974-12",
    "year": 1974,
    "month": 12,
    "depth": 33.9598
  },
  {
    "date": "1975-01",
    "year": 1975,
    "month": 1,
    "depth": 47.0854
  },
  {
    "date": "1975-02",
    "year": 1975,
    "month": 2,
    "depth": 79.085
  },
  {
    "date": "1975-03",
    "year": 1975,
    "month": 3,
    "depth": 87.7173
  },
  {
    "date": "1975-04",
    "year": 1975,
    "month": 4,
    "depth": 73.049
  },
  {
    "date": "1975-05",
    "year": 1975,
    "month": 5,
    "depth": 49.1232
  },
  {
    "date": "1975-06",
    "year": 1975,
    "month": 6,
    "depth": 47.3897
  },
  {
    "date": "1975-07",
    "year": 1975,
    "month": 7,
    "depth": 32.4339
  },
  {
    "date": "1975-08",
    "year": 1975,
    "month": 8,
    "depth": 22.2289
  },
  {
    "date": "1975-09",
    "year": 1975,
    "month": 9,
    "depth": 21.2713
  },
  {
    "date": "1975-10",
    "year": 1975,
    "month": 10,
    "depth": 11.7932
  },
  {
    "date": "1975-11",
    "year": 1975,
    "month": 11,
    "depth": 14.0401
  },
  {
    "date": "1975-12",
    "year": 1975,
    "month": 12,
    "depth": 5.5221
  },
  {
    "date": "1976-01",
    "year": 1976,
    "month": 1,
    "depth": 39.6168
  },
  {
    "date": "1976-02",
    "year": 1976,
    "month": 2,
    "depth": 76.366
  },
  {
    "date": "1976-03",
    "year": 1976,
    "month": 3,
    "depth": 82.2162
  },
  {
    "date": "1976-04",
    "year": 1976,
    "month": 4,
    "depth": 99.0194
  },
  {
    "date": "1976-05",
    "year": 1976,
    "month": 5,
    "depth": 106.2643
  },
  {
    "date": "1976-06",
    "year": 1976,
    "month": 6,
    "depth": 109.9813
  },
  {
    "date": "1976-07",
    "year": 1976,
    "month": 7,
    "depth": 92.6785
  },
  {
    "date": "1976-08",
    "year": 1976,
    "month": 8,
    "depth": 75.1198
  },
  {
    "date": "1976-09",
    "year": 1976,
    "month": 9,
    "depth": 81.1386
  },
  {
    "date": "1976-10",
    "year": 1976,
    "month": 10,
    "depth": 104.7981
  },
  {
    "date": "1976-11",
    "year": 1976,
    "month": 11,
    "depth": 95.0643
  },
  {
    "date": "1976-12",
    "year": 1976,
    "month": 12,
    "depth": 87.0207
  },
  {
    "date": "1977-01",
    "year": 1977,
    "month": 1,
    "depth": 91.4688
  },
  {
    "date": "1977-02",
    "year": 1977,
    "month": 2,
    "depth": 82.0782
  },
  {
    "date": "1977-03",
    "year": 1977,
    "month": 3,
    "depth": 59.1998
  },
  {
    "date": "1977-04",
    "year": 1977,
    "month": 4,
    "depth": 46.4565
  },
  {
    "date": "1977-05",
    "year": 1977,
    "month": 5,
    "depth": 63.9396
  },
  {
    "date": "1977-06",
    "year": 1977,
    "month": 6,
    "depth": 62.831
  },
  {
    "date": "1977-07",
    "year": 1977,
    "month": 7,
    "depth": 43.8505
  },
  {
    "date": "1977-08",
    "year": 1977,
    "month": 8,
    "depth": 17.4395
  },
  {
    "date": "1977-09",
    "year": 1977,
    "month": 9,
    "depth": 43.7589
  },
  {
    "date": "1977-10",
    "year": 1977,
    "month": 10,
    "depth": 67.1971
  },
  {
    "date": "1977-11",
    "year": 1977,
    "month": 11,
    "depth": 70.2769
  },
  {
    "date": "1977-12",
    "year": 1977,
    "month": 12,
    "depth": 69.6196
  },
  {
    "date": "1978-01",
    "year": 1978,
    "month": 1,
    "depth": 78.3264
  },
  {
    "date": "1978-02",
    "year": 1978,
    "month": 2,
    "depth": 78.9427
  },
  {
    "date": "1978-03",
    "year": 1978,
    "month": 3,
    "depth": 65.9937
  },
  {
    "date": "1978-04",
    "year": 1978,
    "month": 4,
    "depth": 57.617
  },
  {
    "date": "1978-05",
    "year": 1978,
    "month": 5,
    "depth": 43.6059
  },
  {
    "date": "1978-06",
    "year": 1978,
    "month": 6,
    "depth": 39.8355
  },
  {
    "date": "1978-07",
    "year": 1978,
    "month": 7,
    "depth": 35.6518
  },
  {
    "date": "1978-08",
    "year": 1978,
    "month": 8,
    "depth": 20.4059
  },
  {
    "date": "1978-09",
    "year": 1978,
    "month": 9,
    "depth": 24.1213
  },
  {
    "date": "1978-10",
    "year": 1978,
    "month": 10,
    "depth": 35.9466
  },
  {
    "date": "1978-11",
    "year": 1978,
    "month": 11,
    "depth": 68.7492
  },
  {
    "date": "1978-12",
    "year": 1978,
    "month": 12,
    "depth": 73.8853
  },
  {
    "date": "1979-01",
    "year": 1979,
    "month": 1,
    "depth": 79.3599
  },
  {
    "date": "1979-02",
    "year": 1979,
    "month": 2,
    "depth": 81.8161
  },
  {
    "date": "1979-03",
    "year": 1979,
    "month": 3,
    "depth": 84.4266
  },
  {
    "date": "1979-04",
    "year": 1979,
    "month": 4,
    "depth": 60.4929
  },
  {
    "date": "1979-05",
    "year": 1979,
    "month": 5,
    "depth": 56.4895
  },
  {
    "date": "1979-06",
    "year": 1979,
    "month": 6,
    "depth": 53.3692
  },
  {
    "date": "1979-07",
    "year": 1979,
    "month": 7,
    "depth": 49.6389
  },
  {
    "date": "1979-08",
    "year": 1979,
    "month": 8,
    "depth": 46.1739
  },
  {
    "date": "1979-09",
    "year": 1979,
    "month": 9,
    "depth": 76.7766
  },
  {
    "date": "1979-10",
    "year": 1979,
    "month": 10,
    "depth": 68.1266
  },
  {
    "date": "1979-11",
    "year": 1979,
    "month": 11,
    "depth": 73.1117
  },
  {
    "date": "1979-12",
    "year": 1979,
    "month": 12,
    "depth": 82.9961
  },
  {
    "date": "1980-01",
    "year": 1980,
    "month": 1,
    "depth": 72.8726
  },
  {
    "date": "1980-02",
    "year": 1980,
    "month": 2,
    "depth": 70.2997
  },
  {
    "date": "1980-03",
    "year": 1980,
    "month": 3,
    "depth": 56.5382
  },
  {
    "date": "1980-04",
    "year": 1980,
    "month": 4,
    "depth": 50.3609
  },
  {
    "date": "1980-05",
    "year": 1980,
    "month": 5,
    "depth": 64.6118
  },
  {
    "date": "1980-06",
    "year": 1980,
    "month": 6,
    "depth": 63.3811
  },
  {
    "date": "1980-07",
    "year": 1980,
    "month": 7,
    "depth": 43.8885
  },
  {
    "date": "1980-08",
    "year": 1980,
    "month": 8,
    "depth": 41.7808
  },
  {
    "date": "1980-09",
    "year": 1980,
    "month": 9,
    "depth": 40.4973
  },
  {
    "date": "1980-10",
    "year": 1980,
    "month": 10,
    "depth": 40.3016
  },
  {
    "date": "1980-11",
    "year": 1980,
    "month": 11,
    "depth": 70.1227
  },
  {
    "date": "1980-12",
    "year": 1980,
    "month": 12,
    "depth": 66.4413
  },
  {
    "date": "1981-01",
    "year": 1981,
    "month": 1,
    "depth": 49.3457
  },
  {
    "date": "1981-02",
    "year": 1981,
    "month": 2,
    "depth": 38.2266
  },
  {
    "date": "1981-03",
    "year": 1981,
    "month": 3,
    "depth": 47.0719
  },
  {
    "date": "1981-04",
    "year": 1981,
    "month": 4,
    "depth": 74.4282
  },
  {
    "date": "1981-05",
    "year": 1981,
    "month": 5,
    "depth": 59.7002
  },
  {
    "date": "1981-06",
    "year": 1981,
    "month": 6,
    "depth": 49.2992
  },
  {
    "date": "1981-07",
    "year": 1981,
    "month": 7,
    "depth": 44.7883
  },
  {
    "date": "1981-08",
    "year": 1981,
    "month": 8,
    "depth": 19.8271
  },
  {
    "date": "1981-09",
    "year": 1981,
    "month": 9,
    "depth": 44.8466
  },
  {
    "date": "1981-10",
    "year": 1981,
    "month": 10,
    "depth": 52.7194
  },
  {
    "date": "1981-11",
    "year": 1981,
    "month": 11,
    "depth": 54.9042
  },
  {
    "date": "1981-12",
    "year": 1981,
    "month": 12,
    "depth": 61.0461
  },
  {
    "date": "1982-01",
    "year": 1982,
    "month": 1,
    "depth": 59.7598
  },
  {
    "date": "1982-02",
    "year": 1982,
    "month": 2,
    "depth": 58.0385
  },
  {
    "date": "1982-03",
    "year": 1982,
    "month": 3,
    "depth": 56.2119
  },
  {
    "date": "1982-04",
    "year": 1982,
    "month": 4,
    "depth": 67.1269
  },
  {
    "date": "1982-05",
    "year": 1982,
    "month": 5,
    "depth": 80.9053
  },
  {
    "date": "1982-06",
    "year": 1982,
    "month": 6,
    "depth": 81.7971
  },
  {
    "date": "1982-07",
    "year": 1982,
    "month": 7,
    "depth": 68.6265
  },
  {
    "date": "1982-08",
    "year": 1982,
    "month": 8,
    "depth": 76.0271
  },
  {
    "date": "1982-09",
    "year": 1982,
    "month": 9,
    "depth": 98.0844
  },
  {
    "date": "1982-10",
    "year": 1982,
    "month": 10,
    "depth": 124.5629
  },
  {
    "date": "1982-11",
    "year": 1982,
    "month": 11,
    "depth": 126.0104
  },
  {
    "date": "1982-12",
    "year": 1982,
    "month": 12,
    "depth": 144.8408
  },
  {
    "date": "1983-01",
    "year": 1983,
    "month": 1,
    "depth": 119.7479
  },
  {
    "date": "1983-02",
    "year": 1983,
    "month": 2,
    "depth": 90.6785
  },
  {
    "date": "1983-03",
    "year": 1983,
    "month": 3,
    "depth": 82.8215
  },
  {
    "date": "1983-04",
    "year": 1983,
    "month": 4,
    "depth": 79.9492
  },
  {
    "date": "1983-05",
    "year": 1983,
    "month": 5,
    "depth": 74.246
  },
  {
    "date": "1983-06",
    "year": 1983,
    "month": 6,
    "depth": 59.7388
  },
  {
    "date": "1983-07",
    "year": 1983,
    "month": 7,
    "depth": 50.1259
  },
  {
    "date": "1983-08",
    "year": 1983,
    "month": 8,
    "depth": 37.2715
  },
  {
    "date": "1983-09",
    "year": 1983,
    "month": 9,
    "depth": 19.6269
  },
  {
    "date": "1983-10",
    "year": 1983,
    "month": 10,
    "depth": 12.8906
  },
  {
    "date": "1983-11",
    "year": 1983,
    "month": 11,
    "depth": 10.757
  },
  {
    "date": "1983-12",
    "year": 1983,
    "month": 12,
    "depth": 4.9053
  },
  {
    "date": "1984-01",
    "year": 1984,
    "month": 1,
    "depth": 22.3493
  },
  {
    "date": "1984-02",
    "year": 1984,
    "month": 2,
    "depth": 41.4656
  },
  {
    "date": "1984-03",
    "year": 1984,
    "month": 3,
    "depth": 44.0246
  },
  {
    "date": "1984-04",
    "year": 1984,
    "month": 4,
    "depth": 35.0745
  },
  {
    "date": "1984-05",
    "year": 1984,
    "month": 5,
    "depth": 30.7781
  },
  {
    "date": "1984-06",
    "year": 1984,
    "month": 6,
    "depth": 24.8461
  },
  {
    "date": "1984-07",
    "year": 1984,
    "month": 7,
    "depth": 28.5456
  },
  {
    "date": "1984-08",
    "year": 1984,
    "month": 8,
    "depth": 30.5116
  },
  {
    "date": "1984-09",
    "year": 1984,
    "month": 9,
    "depth": 20.4959
  },
  {
    "date": "1984-10",
    "year": 1984,
    "month": 10,
    "depth": 31.9105
  },
  {
    "date": "1984-11",
    "year": 1984,
    "month": 11,
    "depth": 29.2969
  },
  {
    "date": "1984-12",
    "year": 1984,
    "month": 12,
    "depth": 20.0937
  },
  {
    "date": "1985-01",
    "year": 1985,
    "month": 1,
    "depth": 25.4645
  },
  {
    "date": "1985-02",
    "year": 1985,
    "month": 2,
    "depth": 30.0591
  },
  {
    "date": "1985-03",
    "year": 1985,
    "month": 3,
    "depth": 42.6523
  },
  {
    "date": "1985-04",
    "year": 1985,
    "month": 4,
    "depth": 30.8019
  },
  {
    "date": "1985-05",
    "year": 1985,
    "month": 5,
    "depth": 39.6066
  },
  {
    "date": "1985-06",
    "year": 1985,
    "month": 6,
    "depth": 35.2253
  },
  {
    "date": "1985-07",
    "year": 1985,
    "month": 7,
    "depth": 28.6613
  },
  {
    "date": "1985-08",
    "year": 1985,
    "month": 8,
    "depth": 45.2081
  },
  {
    "date": "1985-09",
    "year": 1985,
    "month": 9,
    "depth": 42.2082
  },
  {
    "date": "1985-10",
    "year": 1985,
    "month": 10,
    "depth": 36.8194
  },
  {
    "date": "1985-11",
    "year": 1985,
    "month": 11,
    "depth": 46.7489
  },
  {
    "date": "1985-12",
    "year": 1985,
    "month": 12,
    "depth": 43.412
  },
  {
    "date": "1986-01",
    "year": 1986,
    "month": 1,
    "depth": 49.7212
  },
  {
    "date": "1986-02",
    "year": 1986,
    "month": 2,
    "depth": 35.8312
  },
  {
    "date": "1986-03",
    "year": 1986,
    "month": 3,
    "depth": 40.9626
  },
  {
    "date": "1986-04",
    "year": 1986,
    "month": 4,
    "depth": 57.4213
  },
  {
    "date": "1986-05",
    "year": 1986,
    "month": 5,
    "depth": 41.3654
  },
  {
    "date": "1986-06",
    "year": 1986,
    "month": 6,
    "depth": 60.4017
  },
  {
    "date": "1986-07",
    "year": 1986,
    "month": 7,
    "depth": 51.2346
  },
  {
    "date": "1986-08",
    "year": 1986,
    "month": 8,
    "depth": 34.8117
  },
  {
    "date": "1986-09",
    "year": 1986,
    "month": 9,
    "depth": 75.2253
  },
  {
    "date": "1986-10",
    "year": 1986,
    "month": 10,
    "depth": 96.0241
  },
  {
    "date": "1986-11",
    "year": 1986,
    "month": 11,
    "depth": 84.939
  },
  {
    "date": "1986-12",
    "year": 1986,
    "month": 12,
    "depth": 84.9697
  },
  {
    "date": "1987-01",
    "year": 1987,
    "month": 1,
    "depth": 108.7403
  },
  {
    "date": "1987-02",
    "year": 1987,
    "month": 2,
    "depth": 88.3479
  },
  {
    "date": "1987-03",
    "year": 1987,
    "month": 3,
    "depth": 70.8311
  },
  {
    "date": "1987-04",
    "year": 1987,
    "month": 4,
    "depth": 87.3379
  },
  {
    "date": "1987-05",
    "year": 1987,
    "month": 5,
    "depth": 73.1827
  },
  {
    "date": "1987-06",
    "year": 1987,
    "month": 6,
    "depth": 73.9577
  },
  {
    "date": "1987-07",
    "year": 1987,
    "month": 7,
    "depth": 65.734
  },
  {
    "date": "1987-08",
    "year": 1987,
    "month": 8,
    "depth": 72.3084
  },
  {
    "date": "1987-09",
    "year": 1987,
    "month": 9,
    "depth": 65.1717
  },
  {
    "date": "1987-10",
    "year": 1987,
    "month": 10,
    "depth": 63.6396
  },
  {
    "date": "1987-11",
    "year": 1987,
    "month": 11,
    "depth": 57.2614
  },
  {
    "date": "1987-12",
    "year": 1987,
    "month": 12,
    "depth": 56.0645
  },
  {
    "date": "1988-01",
    "year": 1988,
    "month": 1,
    "depth": 32.0991
  },
  {
    "date": "1988-02",
    "year": 1988,
    "month": 2,
    "depth": 45.1535
  },
  {
    "date": "1988-03",
    "year": 1988,
    "month": 3,
    "depth": 33.0398
  },
  {
    "date": "1988-04",
    "year": 1988,
    "month": 4,
    "depth": 15.8542
  },
  {
    "date": "1988-05",
    "year": 1988,
    "month": 5,
    "depth": 9.4405
  },
  {
    "date": "1988-06",
    "year": 1988,
    "month": 6,
    "depth": 10.5458
  },
  {
    "date": "1988-07",
    "year": 1988,
    "month": 7,
    "depth": 21.2468
  },
  {
    "date": "1988-08",
    "year": 1988,
    "month": 8,
    "depth": 15.4914
  },
  {
    "date": "1988-09",
    "year": 1988,
    "month": 9,
    "depth": 19.4625
  },
  {
    "date": "1988-10",
    "year": 1988,
    "month": 10,
    "depth": 13.8937
  },
  {
    "date": "1988-11",
    "year": 1988,
    "month": 11,
    "depth": 6.1265
  },
  {
    "date": "1988-12",
    "year": 1988,
    "month": 12,
    "depth": 1.8854
  },
  {
    "date": "1989-01",
    "year": 1989,
    "month": 1,
    "depth": 12.5436
  },
  {
    "date": "1989-02",
    "year": 1989,
    "month": 2,
    "depth": 42.8138
  },
  {
    "date": "1989-03",
    "year": 1989,
    "month": 3,
    "depth": 39.8733
  },
  {
    "date": "1989-04",
    "year": 1989,
    "month": 4,
    "depth": 53.3048
  },
  {
    "date": "1989-05",
    "year": 1989,
    "month": 5,
    "depth": 48.3172
  },
  {
    "date": "1989-06",
    "year": 1989,
    "month": 6,
    "depth": 54.2139
  },
  {
    "date": "1989-07",
    "year": 1989,
    "month": 7,
    "depth": 47.3472
  },
  {
    "date": "1989-08",
    "year": 1989,
    "month": 8,
    "depth": 33.2668
  },
  {
    "date": "1989-09",
    "year": 1989,
    "month": 9,
    "depth": 40.4985
  },
  {
    "date": "1989-10",
    "year": 1989,
    "month": 10,
    "depth": 50.3921
  },
  {
    "date": "1989-11",
    "year": 1989,
    "month": 11,
    "depth": 44.8182
  },
  {
    "date": "1989-12",
    "year": 1989,
    "month": 12,
    "depth": 41.8415
  },
  {
    "date": "1990-01",
    "year": 1990,
    "month": 1,
    "depth": 82.5615
  },
  {
    "date": "1990-02",
    "year": 1990,
    "month": 2,
    "depth": 65.7101
  },
  {
    "date": "1990-03",
    "year": 1990,
    "month": 3,
    "depth": 69.7297
  },
  {
    "date": "1990-04",
    "year": 1990,
    "month": 4,
    "depth": 68.2433
  },
  {
    "date": "1990-05",
    "year": 1990,
    "month": 5,
    "depth": 62.9148
  },
  {
    "date": "1990-06",
    "year": 1990,
    "month": 6,
    "depth": 43.48
  },
  {
    "date": "1990-07",
    "year": 1990,
    "month": 7,
    "depth": 38.2937
  },
  {
    "date": "1990-08",
    "year": 1990,
    "month": 8,
    "depth": 55.6767
  },
  {
    "date": "1990-09",
    "year": 1990,
    "month": 9,
    "depth": 50.9675
  },
  {
    "date": "1990-10",
    "year": 1990,
    "month": 10,
    "depth": 61.2946
  },
  {
    "date": "1990-11",
    "year": 1990,
    "month": 11,
    "depth": 62.5829
  },
  {
    "date": "1990-12",
    "year": 1990,
    "month": 12,
    "depth": 59.5489
  },
  {
    "date": "1991-01",
    "year": 1991,
    "month": 1,
    "depth": 89.3693
  },
  {
    "date": "1991-02",
    "year": 1991,
    "month": 2,
    "depth": 78.0273
  },
  {
    "date": "1991-03",
    "year": 1991,
    "month": 3,
    "depth": 43.6049
  },
  {
    "date": "1991-04",
    "year": 1991,
    "month": 4,
    "depth": 62.8691
  },
  {
    "date": "1991-05",
    "year": 1991,
    "month": 5,
    "depth": 77.5454
  },
  {
    "date": "1991-06",
    "year": 1991,
    "month": 6,
    "depth": 72.7901
  },
  {
    "date": "1991-07",
    "year": 1991,
    "month": 7,
    "depth": 67.0106
  },
  {
    "date": "1991-08",
    "year": 1991,
    "month": 8,
    "depth": 53.8846
  },
  {
    "date": "1991-09",
    "year": 1991,
    "month": 9,
    "depth": 48.0428
  },
  {
    "date": "1991-10",
    "year": 1991,
    "month": 10,
    "depth": 90.7835
  },
  {
    "date": "1991-11",
    "year": 1991,
    "month": 11,
    "depth": 103.2328
  },
  {
    "date": "1991-12",
    "year": 1991,
    "month": 12,
    "depth": 104.9161
  },
  {
    "date": "1992-01",
    "year": 1992,
    "month": 1,
    "depth": 107.7905
  },
  {
    "date": "1992-02",
    "year": 1992,
    "month": 2,
    "depth": 121.6048
  },
  {
    "date": "1992-03",
    "year": 1992,
    "month": 3,
    "depth": 95.0947
  },
  {
    "date": "1992-04",
    "year": 1992,
    "month": 4,
    "depth": 82.1178
  },
  {
    "date": "1992-05",
    "year": 1992,
    "month": 5,
    "depth": 63.2698
  },
  {
    "date": "1992-06",
    "year": 1992,
    "month": 6,
    "depth": 43.2674
  },
  {
    "date": "1992-07",
    "year": 1992,
    "month": 7,
    "depth": 41.5553
  },
  {
    "date": "1992-08",
    "year": 1992,
    "month": 8,
    "depth": 39.1771
  },
  {
    "date": "1992-09",
    "year": 1992,
    "month": 9,
    "depth": 37.1334
  },
  {
    "date": "1992-10",
    "year": 1992,
    "month": 10,
    "depth": 45.443
  },
  {
    "date": "1992-11",
    "year": 1992,
    "month": 11,
    "depth": 40.1849
  },
  {
    "date": "1992-12",
    "year": 1992,
    "month": 12,
    "depth": 69.1868
  },
  {
    "date": "1993-01",
    "year": 1993,
    "month": 1,
    "depth": 66.7598
  },
  {
    "date": "1993-02",
    "year": 1993,
    "month": 2,
    "depth": 69.6989
  },
  {
    "date": "1993-03",
    "year": 1993,
    "month": 3,
    "depth": 65.1214
  },
  {
    "date": "1993-04",
    "year": 1993,
    "month": 4,
    "depth": 74.1354
  },
  {
    "date": "1993-05",
    "year": 1993,
    "month": 5,
    "depth": 70.8661
  },
  {
    "date": "1993-06",
    "year": 1993,
    "month": 6,
    "depth": 56.4766
  },
  {
    "date": "1993-07",
    "year": 1993,
    "month": 7,
    "depth": 42.5412
  },
  {
    "date": "1993-08",
    "year": 1993,
    "month": 8,
    "depth": 30.2065
  },
  {
    "date": "1993-09",
    "year": 1993,
    "month": 9,
    "depth": 48.2674
  },
  {
    "date": "1993-10",
    "year": 1993,
    "month": 10,
    "depth": 56.257
  },
  {
    "date": "1993-11",
    "year": 1993,
    "month": 11,
    "depth": 52.6648
  },
  {
    "date": "1993-12",
    "year": 1993,
    "month": 12,
    "depth": 56.7516
  },
  {
    "date": "1994-01",
    "year": 1994,
    "month": 1,
    "depth": 42.3322
  },
  {
    "date": "1994-02",
    "year": 1994,
    "month": 2,
    "depth": 33.8725
  },
  {
    "date": "1994-03",
    "year": 1994,
    "month": 3,
    "depth": 35.7622
  },
  {
    "date": "1994-04",
    "year": 1994,
    "month": 4,
    "depth": 34.8549
  },
  {
    "date": "1994-05",
    "year": 1994,
    "month": 5,
    "depth": 36.5248
  },
  {
    "date": "1994-06",
    "year": 1994,
    "month": 6,
    "depth": 49.4281
  },
  {
    "date": "1994-07",
    "year": 1994,
    "month": 7,
    "depth": 32.5065
  },
  {
    "date": "1994-08",
    "year": 1994,
    "month": 8,
    "depth": 44.7803
  },
  {
    "date": "1994-09",
    "year": 1994,
    "month": 9,
    "depth": 59.0344
  },
  {
    "date": "1994-10",
    "year": 1994,
    "month": 10,
    "depth": 80.7848
  },
  {
    "date": "1994-11",
    "year": 1994,
    "month": 11,
    "depth": 98.7011
  },
  {
    "date": "1994-12",
    "year": 1994,
    "month": 12,
    "depth": 89.8988
  },
  {
    "date": "1995-01",
    "year": 1995,
    "month": 1,
    "depth": 58.6135
  },
  {
    "date": "1995-02",
    "year": 1995,
    "month": 2,
    "depth": 68.2275
  },
  {
    "date": "1995-03",
    "year": 1995,
    "month": 3,
    "depth": 27.4342
  },
  {
    "date": "1995-04",
    "year": 1995,
    "month": 4,
    "depth": 35.4739
  },
  {
    "date": "1995-05",
    "year": 1995,
    "month": 5,
    "depth": 33.5463
  },
  {
    "date": "1995-06",
    "year": 1995,
    "month": 6,
    "depth": 48.2498
  },
  {
    "date": "1995-07",
    "year": 1995,
    "month": 7,
    "depth": 43.9164
  },
  {
    "date": "1995-08",
    "year": 1995,
    "month": 8,
    "depth": 23.324
  },
  {
    "date": "1995-09",
    "year": 1995,
    "month": 9,
    "depth": 17.0992
  },
  {
    "date": "1995-10",
    "year": 1995,
    "month": 10,
    "depth": 17.4333
  },
  {
    "date": "1995-11",
    "year": 1995,
    "month": 11,
    "depth": 24.3023
  },
  {
    "date": "1995-12",
    "year": 1995,
    "month": 12,
    "depth": 21.982
  },
  {
    "date": "1996-01",
    "year": 1996,
    "month": 1,
    "depth": 47.7888
  },
  {
    "date": "1996-02",
    "year": 1996,
    "month": 2,
    "depth": 47.051
  },
  {
    "date": "1996-03",
    "year": 1996,
    "month": 3,
    "depth": 38.4769
  },
  {
    "date": "1996-04",
    "year": 1996,
    "month": 4,
    "depth": 39.6182
  },
  {
    "date": "1996-05",
    "year": 1996,
    "month": 5,
    "depth": 43.761
  },
  {
    "date": "1996-06",
    "year": 1996,
    "month": 6,
    "depth": 46.1193
  },
  {
    "date": "1996-07",
    "year": 1996,
    "month": 7,
    "depth": 54.1488
  },
  {
    "date": "1996-08",
    "year": 1996,
    "month": 8,
    "depth": 36.0938
  },
  {
    "date": "1996-09",
    "year": 1996,
    "month": 9,
    "depth": 35.5784
  },
  {
    "date": "1996-10",
    "year": 1996,
    "month": 10,
    "depth": 37.2334
  },
  {
    "date": "1996-11",
    "year": 1996,
    "month": 11,
    "depth": 39.8155
  },
  {
    "date": "1996-12",
    "year": 1996,
    "month": 12,
    "depth": 25.6912
  },
  {
    "date": "1997-01",
    "year": 1997,
    "month": 1,
    "depth": 44.7075
  },
  {
    "date": "1997-02",
    "year": 1997,
    "month": 2,
    "depth": 83.1039
  },
  {
    "date": "1997-03",
    "year": 1997,
    "month": 3,
    "depth": 70.9855
  },
  {
    "date": "1997-04",
    "year": 1997,
    "month": 4,
    "depth": 87.5534
  },
  {
    "date": "1997-05",
    "year": 1997,
    "month": 5,
    "depth": 109.3704
  },
  {
    "date": "1997-06",
    "year": 1997,
    "month": 6,
    "depth": 114.3405
  },
  {
    "date": "1997-07",
    "year": 1997,
    "month": 7,
    "depth": 114.9627
  },
  {
    "date": "1997-08",
    "year": 1997,
    "month": 8,
    "depth": 98.0797
  },
  {
    "date": "1997-09",
    "year": 1997,
    "month": 9,
    "depth": 119.4487
  },
  {
    "date": "1997-10",
    "year": 1997,
    "month": 10,
    "depth": 138.3916
  },
  {
    "date": "1997-11",
    "year": 1997,
    "month": 11,
    "depth": 152.0439
  },
  {
    "date": "1997-12",
    "year": 1997,
    "month": 12,
    "depth": 131.9113
  },
  {
    "date": "1998-01",
    "year": 1998,
    "month": 1,
    "depth": 96.8942
  },
  {
    "date": "1998-02",
    "year": 1998,
    "month": 2,
    "depth": 77.0842
  },
  {
    "date": "1998-03",
    "year": 1998,
    "month": 3,
    "depth": 56.4672
  },
  {
    "date": "1998-04",
    "year": 1998,
    "month": 4,
    "depth": 57.0373
  },
  {
    "date": "1998-05",
    "year": 1998,
    "month": 5,
    "depth": 40.4684
  },
  {
    "date": "1998-06",
    "year": 1998,
    "month": 6,
    "depth": 31.4755
  },
  {
    "date": "1998-07",
    "year": 1998,
    "month": 7,
    "depth": 30.7853
  },
  {
    "date": "1998-08",
    "year": 1998,
    "month": 8,
    "depth": 18.7344
  },
  {
    "date": "1998-09",
    "year": 1998,
    "month": 9,
    "depth": 8.5501
  },
  {
    "date": "1998-10",
    "year": 1998,
    "month": 10,
    "depth": 7.7248
  },
  {
    "date": "1998-11",
    "year": 1998,
    "month": 11,
    "depth": 6.6629
  },
  {
    "date": "1998-12",
    "year": 1998,
    "month": 12,
    "depth": 5.4683
  },
  {
    "date": "1999-01",
    "year": 1999,
    "month": 1,
    "depth": 12.3586
  },
  {
    "date": "1999-02",
    "year": 1999,
    "month": 2,
    "depth": 31.486
  },
  {
    "date": "1999-03",
    "year": 1999,
    "month": 3,
    "depth": 29.8955
  },
  {
    "date": "1999-04",
    "year": 1999,
    "month": 4,
    "depth": 34.7778
  },
  {
    "date": "1999-05",
    "year": 1999,
    "month": 5,
    "depth": 37.069
  },
  {
    "date": "1999-06",
    "year": 1999,
    "month": 6,
    "depth": 29.9704
  },
  {
    "date": "1999-07",
    "year": 1999,
    "month": 7,
    "depth": 31.4654
  },
  {
    "date": "1999-08",
    "year": 1999,
    "month": 8,
    "depth": 19.3456
  },
  {
    "date": "1999-09",
    "year": 1999,
    "month": 9,
    "depth": 5.6827
  },
  {
    "date": "1999-10",
    "year": 1999,
    "month": 10,
    "depth": 12.6174
  },
  {
    "date": "1999-11",
    "year": 1999,
    "month": 11,
    "depth": 15.1377
  },
  {
    "date": "1999-12",
    "year": 1999,
    "month": 12,
    "depth": 9.2862
  },
  {
    "date": "2000-01",
    "year": 2000,
    "month": 1,
    "depth": 19.1256
  },
  {
    "date": "2000-02",
    "year": 2000,
    "month": 2,
    "depth": 26.9731
  },
  {
    "date": "2000-03",
    "year": 2000,
    "month": 3,
    "depth": 41.3599
  },
  {
    "date": "2000-04",
    "year": 2000,
    "month": 4,
    "depth": 42.934
  },
  {
    "date": "2000-05",
    "year": 2000,
    "month": 5,
    "depth": 45.6114
  },
  {
    "date": "2000-06",
    "year": 2000,
    "month": 6,
    "depth": 44.0097
  },
  {
    "date": "2000-07",
    "year": 2000,
    "month": 7,
    "depth": 46.567
  },
  {
    "date": "2000-08",
    "year": 2000,
    "month": 8,
    "depth": 38.8024
  },
  {
    "date": "2000-09",
    "year": 2000,
    "month": 9,
    "depth": 38.5922
  },
  {
    "date": "2000-10",
    "year": 2000,
    "month": 10,
    "depth": 43.3338
  },
  {
    "date": "2000-11",
    "year": 2000,
    "month": 11,
    "depth": 27.5342
  },
  {
    "date": "2000-12",
    "year": 2000,
    "month": 12,
    "depth": 33.1746
  },
  {
    "date": "2001-01",
    "year": 2001,
    "month": 1,
    "depth": 34.8817
  },
  {
    "date": "2001-02",
    "year": 2001,
    "month": 2,
    "depth": 51.7605
  },
  {
    "date": "2001-03",
    "year": 2001,
    "month": 3,
    "depth": 32.7669
  },
  {
    "date": "2001-04",
    "year": 2001,
    "month": 4,
    "depth": 45.8316
  },
  {
    "date": "2001-05",
    "year": 2001,
    "month": 5,
    "depth": 45.7012
  },
  {
    "date": "2001-06",
    "year": 2001,
    "month": 6,
    "depth": 46.2004
  },
  {
    "date": "2001-07",
    "year": 2001,
    "month": 7,
    "depth": 41.0685
  },
  {
    "date": "2001-08",
    "year": 2001,
    "month": 8,
    "depth": 30.4263
  },
  {
    "date": "2001-09",
    "year": 2001,
    "month": 9,
    "depth": 21.6175
  },
  {
    "date": "2001-10",
    "year": 2001,
    "month": 10,
    "depth": 51.2604
  },
  {
    "date": "2001-11",
    "year": 2001,
    "month": 11,
    "depth": 52.7682
  },
  {
    "date": "2001-12",
    "year": 2001,
    "month": 12,
    "depth": 49.1355
  },
  {
    "date": "2002-01",
    "year": 2002,
    "month": 1,
    "depth": 69.1324
  },
  {
    "date": "2002-02",
    "year": 2002,
    "month": 2,
    "depth": 84.2231
  },
  {
    "date": "2002-03",
    "year": 2002,
    "month": 3,
    "depth": 62.9301
  },
  {
    "date": "2002-04",
    "year": 2002,
    "month": 4,
    "depth": 45.278
  },
  {
    "date": "2002-05",
    "year": 2002,
    "month": 5,
    "depth": 43.897
  },
  {
    "date": "2002-06",
    "year": 2002,
    "month": 6,
    "depth": 64.4082
  },
  {
    "date": "2002-07",
    "year": 2002,
    "month": 7,
    "depth": 54.61
  },
  {
    "date": "2002-08",
    "year": 2002,
    "month": 8,
    "depth": 52.9397
  },
  {
    "date": "2002-09",
    "year": 2002,
    "month": 9,
    "depth": 67.8832
  },
  {
    "date": "2002-10",
    "year": 2002,
    "month": 10,
    "depth": 86.6492
  },
  {
    "date": "2002-11",
    "year": 2002,
    "month": 11,
    "depth": 107.5066
  },
  {
    "date": "2002-12",
    "year": 2002,
    "month": 12,
    "depth": 77.8427
  },
  {
    "date": "2003-01",
    "year": 2003,
    "month": 1,
    "depth": 69.3056
  },
  {
    "date": "2003-02",
    "year": 2003,
    "month": 2,
    "depth": 42.9497
  },
  {
    "date": "2003-03",
    "year": 2003,
    "month": 3,
    "depth": 41.3186
  },
  {
    "date": "2003-04",
    "year": 2003,
    "month": 4,
    "depth": 33.9804
  },
  {
    "date": "2003-05",
    "year": 2003,
    "month": 5,
    "depth": 33.2781
  },
  {
    "date": "2003-06",
    "year": 2003,
    "month": 6,
    "depth": 36.1624
  },
  {
    "date": "2003-07",
    "year": 2003,
    "month": 7,
    "depth": 68.6846
  },
  {
    "date": "2003-08",
    "year": 2003,
    "month": 8,
    "depth": 46.9618
  },
  {
    "date": "2003-09",
    "year": 2003,
    "month": 9,
    "depth": 35.2931
  },
  {
    "date": "2003-10",
    "year": 2003,
    "month": 10,
    "depth": 59.1046
  },
  {
    "date": "2003-11",
    "year": 2003,
    "month": 11,
    "depth": 71.5171
  },
  {
    "date": "2003-12",
    "year": 2003,
    "month": 12,
    "depth": 64.5991
  },
  {
    "date": "2004-01",
    "year": 2004,
    "month": 1,
    "depth": 50.4206
  },
  {
    "date": "2004-02",
    "year": 2004,
    "month": 2,
    "depth": 50.7735
  },
  {
    "date": "2004-03",
    "year": 2004,
    "month": 3,
    "depth": 48.2967
  },
  {
    "date": "2004-04",
    "year": 2004,
    "month": 4,
    "depth": 33.4632
  },
  {
    "date": "2004-05",
    "year": 2004,
    "month": 5,
    "depth": 48.5657
  },
  {
    "date": "2004-06",
    "year": 2004,
    "month": 6,
    "depth": 45.758
  },
  {
    "date": "2004-07",
    "year": 2004,
    "month": 7,
    "depth": 37.3925
  },
  {
    "date": "2004-08",
    "year": 2004,
    "month": 8,
    "depth": 61.0615
  },
  {
    "date": "2004-09",
    "year": 2004,
    "month": 9,
    "depth": 64.1905
  },
  {
    "date": "2004-10",
    "year": 2004,
    "month": 10,
    "depth": 72.7132
  },
  {
    "date": "2004-11",
    "year": 2004,
    "month": 11,
    "depth": 66.417
  },
  {
    "date": "2004-12",
    "year": 2004,
    "month": 12,
    "depth": 81.7356
  },
  {
    "date": "2005-01",
    "year": 2005,
    "month": 1,
    "depth": 64.6853
  },
  {
    "date": "2005-02",
    "year": 2005,
    "month": 2,
    "depth": 46.6571
  },
  {
    "date": "2005-03",
    "year": 2005,
    "month": 3,
    "depth": 54.878
  },
  {
    "date": "2005-04",
    "year": 2005,
    "month": 4,
    "depth": 72.5177
  },
  {
    "date": "2005-05",
    "year": 2005,
    "month": 5,
    "depth": 53.1826
  },
  {
    "date": "2005-06",
    "year": 2005,
    "month": 6,
    "depth": 57.0711
  },
  {
    "date": "2005-07",
    "year": 2005,
    "month": 7,
    "depth": 50.317
  },
  {
    "date": "2005-08",
    "year": 2005,
    "month": 8,
    "depth": 35.905
  },
  {
    "date": "2005-09",
    "year": 2005,
    "month": 9,
    "depth": 38.6622
  },
  {
    "date": "2005-10",
    "year": 2005,
    "month": 10,
    "depth": 45.8043
  },
  {
    "date": "2005-11",
    "year": 2005,
    "month": 11,
    "depth": 50.5267
  },
  {
    "date": "2005-12",
    "year": 2005,
    "month": 12,
    "depth": 32.4031
  },
  {
    "date": "2006-01",
    "year": 2006,
    "month": 1,
    "depth": 46.4525
  },
  {
    "date": "2006-02",
    "year": 2006,
    "month": 2,
    "depth": 35.0872
  },
  {
    "date": "2006-03",
    "year": 2006,
    "month": 3,
    "depth": 32.3796
  },
  {
    "date": "2006-04",
    "year": 2006,
    "month": 4,
    "depth": 56.8888
  },
  {
    "date": "2006-05",
    "year": 2006,
    "month": 5,
    "depth": 61.9495
  },
  {
    "date": "2006-06",
    "year": 2006,
    "month": 6,
    "depth": 61.9423
  },
  {
    "date": "2006-07",
    "year": 2006,
    "month": 7,
    "depth": 56.3894
  },
  {
    "date": "2006-08",
    "year": 2006,
    "month": 8,
    "depth": 59.8606
  },
  {
    "date": "2006-09",
    "year": 2006,
    "month": 9,
    "depth": 83.9428
  },
  {
    "date": "2006-10",
    "year": 2006,
    "month": 10,
    "depth": 71.2011
  },
  {
    "date": "2006-11",
    "year": 2006,
    "month": 11,
    "depth": 77.7853
  },
  {
    "date": "2006-12",
    "year": 2006,
    "month": 12,
    "depth": 97.4672
  },
  {
    "date": "2007-01",
    "year": 2007,
    "month": 1,
    "depth": 68.2879
  },
  {
    "date": "2007-02",
    "year": 2007,
    "month": 2,
    "depth": 29.9391
  },
  {
    "date": "2007-03",
    "year": 2007,
    "month": 3,
    "depth": 30.3658
  },
  {
    "date": "2007-04",
    "year": 2007,
    "month": 4,
    "depth": 39.2097
  },
  {
    "date": "2007-05",
    "year": 2007,
    "month": 5,
    "depth": 33.0621
  },
  {
    "date": "2007-06",
    "year": 2007,
    "month": 6,
    "depth": 46.0283
  },
  {
    "date": "2007-07",
    "year": 2007,
    "month": 7,
    "depth": 28.9069
  },
  {
    "date": "2007-08",
    "year": 2007,
    "month": 8,
    "depth": 10.8142
  },
  {
    "date": "2007-09",
    "year": 2007,
    "month": 9,
    "depth": 14.8231
  },
  {
    "date": "2007-10",
    "year": 2007,
    "month": 10,
    "depth": 11.6455
  },
  {
    "date": "2007-11",
    "year": 2007,
    "month": 11,
    "depth": 2.9286
  },
  {
    "date": "2007-12",
    "year": 2007,
    "month": 12,
    "depth": 21.1503
  },
  {
    "date": "2008-01",
    "year": 2008,
    "month": 1,
    "depth": 30.9458
  },
  {
    "date": "2008-02",
    "year": 2008,
    "month": 2,
    "depth": 27.2612
  },
  {
    "date": "2008-03",
    "year": 2008,
    "month": 3,
    "depth": 40.3352
  },
  {
    "date": "2008-04",
    "year": 2008,
    "month": 4,
    "depth": 64.0464
  },
  {
    "date": "2008-05",
    "year": 2008,
    "month": 5,
    "depth": 74.4644
  },
  {
    "date": "2008-06",
    "year": 2008,
    "month": 6,
    "depth": 70.8469
  },
  {
    "date": "2008-07",
    "year": 2008,
    "month": 7,
    "depth": 59.5773
  },
  {
    "date": "2008-08",
    "year": 2008,
    "month": 8,
    "depth": 60.7758
  },
  {
    "date": "2008-09",
    "year": 2008,
    "month": 9,
    "depth": 44.7192
  },
  {
    "date": "2008-10",
    "year": 2008,
    "month": 10,
    "depth": 36.0401
  },
  {
    "date": "2008-11",
    "year": 2008,
    "month": 11,
    "depth": 37.5105
  },
  {
    "date": "2008-12",
    "year": 2008,
    "month": 12,
    "depth": 28.1836
  },
  {
    "date": "2009-01",
    "year": 2009,
    "month": 1,
    "depth": 28.9809
  },
  {
    "date": "2009-02",
    "year": 2009,
    "month": 2,
    "depth": 37.3634
  },
  {
    "date": "2009-03",
    "year": 2009,
    "month": 3,
    "depth": 46.0149
  },
  {
    "date": "2009-04",
    "year": 2009,
    "month": 4,
    "depth": 59.8256
  },
  {
    "date": "2009-05",
    "year": 2009,
    "month": 5,
    "depth": 67.2085
  },
  {
    "date": "2009-06",
    "year": 2009,
    "month": 6,
    "depth": 68.9933
  },
  {
    "date": "2009-07",
    "year": 2009,
    "month": 7,
    "depth": 61.674
  },
  {
    "date": "2009-08",
    "year": 2009,
    "month": 8,
    "depth": 47.3726
  },
  {
    "date": "2009-09",
    "year": 2009,
    "month": 9,
    "depth": 74.2838
  },
  {
    "date": "2009-10",
    "year": 2009,
    "month": 10,
    "depth": 58.1405
  },
  {
    "date": "2009-11",
    "year": 2009,
    "month": 11,
    "depth": 110.1231
  },
  {
    "date": "2009-12",
    "year": 2009,
    "month": 12,
    "depth": 98.2275
  },
  {
    "date": "2010-01",
    "year": 2010,
    "month": 1,
    "depth": 77.4756
  },
  {
    "date": "2010-02",
    "year": 2010,
    "month": 2,
    "depth": 68.5164
  },
  {
    "date": "2010-03",
    "year": 2010,
    "month": 3,
    "depth": 84.4659
  },
  {
    "date": "2010-04",
    "year": 2010,
    "month": 4,
    "depth": 63.1678
  },
  {
    "date": "2010-05",
    "year": 2010,
    "month": 5,
    "depth": 42.5504
  },
  {
    "date": "2010-06",
    "year": 2010,
    "month": 6,
    "depth": 34.3167
  },
  {
    "date": "2010-07",
    "year": 2010,
    "month": 7,
    "depth": 25.8124
  },
  {
    "date": "2010-08",
    "year": 2010,
    "month": 8,
    "depth": 13.9654
  },
  {
    "date": "2010-09",
    "year": 2010,
    "month": 9,
    "depth": 5.3504
  },
  {
    "date": "2010-10",
    "year": 2010,
    "month": 10,
    "depth": 4.9716
  },
  {
    "date": "2010-11",
    "year": 2010,
    "month": 11,
    "depth": 13.3754
  },
  {
    "date": "2010-12",
    "year": 2010,
    "month": 12,
    "depth": 15.4639
  },
  {
    "date": "2011-01",
    "year": 2011,
    "month": 1,
    "depth": 29.585
  },
  {
    "date": "2011-02",
    "year": 2011,
    "month": 2,
    "depth": 43.2159
  },
  {
    "date": "2011-03",
    "year": 2011,
    "month": 3,
    "depth": 60.5767
  },
  {
    "date": "2011-04",
    "year": 2011,
    "month": 4,
    "depth": 69.6481
  },
  {
    "date": "2011-05",
    "year": 2011,
    "month": 5,
    "depth": 68.8892
  },
  {
    "date": "2011-06",
    "year": 2011,
    "month": 6,
    "depth": 63.0295
  },
  {
    "date": "2011-07",
    "year": 2011,
    "month": 7,
    "depth": 47.5723
  },
  {
    "date": "2011-08",
    "year": 2011,
    "month": 8,
    "depth": 34.3489
  },
  {
    "date": "2011-09",
    "year": 2011,
    "month": 9,
    "depth": 17.7549
  },
  {
    "date": "2011-10",
    "year": 2011,
    "month": 10,
    "depth": 15.6968
  },
  {
    "date": "2011-11",
    "year": 2011,
    "month": 11,
    "depth": 5.9331
  },
  {
    "date": "2011-12",
    "year": 2011,
    "month": 12,
    "depth": 26.988
  },
  {
    "date": "2012-01",
    "year": 2012,
    "month": 1,
    "depth": 33.892
  },
  {
    "date": "2012-02",
    "year": 2012,
    "month": 2,
    "depth": 40.3123
  },
  {
    "date": "2012-03",
    "year": 2012,
    "month": 3,
    "depth": 58.3459
  },
  {
    "date": "2012-04",
    "year": 2012,
    "month": 4,
    "depth": 52.3387
  },
  {
    "date": "2012-05",
    "year": 2012,
    "month": 5,
    "depth": 68.3988
  },
  {
    "date": "2012-06",
    "year": 2012,
    "month": 6,
    "depth": 62.5981
  },
  {
    "date": "2012-07",
    "year": 2012,
    "month": 7,
    "depth": 66.8706
  },
  {
    "date": "2012-08",
    "year": 2012,
    "month": 8,
    "depth": 55.3949
  },
  {
    "date": "2012-09",
    "year": 2012,
    "month": 9,
    "depth": 53.4726
  },
  {
    "date": "2012-10",
    "year": 2012,
    "month": 10,
    "depth": 42.1846
  },
  {
    "date": "2012-11",
    "year": 2012,
    "month": 11,
    "depth": 60.236
  },
  {
    "date": "2012-12",
    "year": 2012,
    "month": 12,
    "depth": 48.134
  },
  {
    "date": "2013-01",
    "year": 2013,
    "month": 1,
    "depth": 32.3639
  },
  {
    "date": "2013-02",
    "year": 2013,
    "month": 2,
    "depth": 34.3192
  },
  {
    "date": "2013-03",
    "year": 2013,
    "month": 3,
    "depth": 60.1094
  },
  {
    "date": "2013-04",
    "year": 2013,
    "month": 4,
    "depth": 44.2971
  },
  {
    "date": "2013-05",
    "year": 2013,
    "month": 5,
    "depth": 33.0657
  },
  {
    "date": "2013-06",
    "year": 2013,
    "month": 6,
    "depth": 50.4022
  },
  {
    "date": "2013-07",
    "year": 2013,
    "month": 7,
    "depth": 48.0434
  },
  {
    "date": "2013-08",
    "year": 2013,
    "month": 8,
    "depth": 39.9421
  },
  {
    "date": "2013-09",
    "year": 2013,
    "month": 9,
    "depth": 61.6225
  },
  {
    "date": "2013-10",
    "year": 2013,
    "month": 10,
    "depth": 51.7535
  },
  {
    "date": "2013-11",
    "year": 2013,
    "month": 11,
    "depth": 60.659
  },
  {
    "date": "2013-12",
    "year": 2013,
    "month": 12,
    "depth": 78.0579
  },
  {
    "date": "2014-01",
    "year": 2014,
    "month": 1,
    "depth": 48.8065
  },
  {
    "date": "2014-02",
    "year": 2014,
    "month": 2,
    "depth": 31.3843
  },
  {
    "date": "2014-03",
    "year": 2014,
    "month": 3,
    "depth": 64.1645
  },
  {
    "date": "2014-04",
    "year": 2014,
    "month": 4,
    "depth": 93.7335
  },
  {
    "date": "2014-05",
    "year": 2014,
    "month": 5,
    "depth": 80.6805
  },
  {
    "date": "2014-06",
    "year": 2014,
    "month": 6,
    "depth": 73.855
  },
  {
    "date": "2014-07",
    "year": 2014,
    "month": 7,
    "depth": 46.8948
  },
  {
    "date": "2014-08",
    "year": 2014,
    "month": 8,
    "depth": 38.373
  },
  {
    "date": "2014-09",
    "year": 2014,
    "month": 9,
    "depth": 65.3696
  },
  {
    "date": "2014-10",
    "year": 2014,
    "month": 10,
    "depth": 67.1003
  },
  {
    "date": "2014-11",
    "year": 2014,
    "month": 11,
    "depth": 72.3242
  },
  {
    "date": "2014-12",
    "year": 2014,
    "month": 12,
    "depth": 81.6668
  },
  {
    "date": "2015-01",
    "year": 2015,
    "month": 1,
    "depth": 47.4208
  },
  {
    "date": "2015-02",
    "year": 2015,
    "month": 2,
    "depth": 62.6538
  },
  {
    "date": "2015-03",
    "year": 2015,
    "month": 3,
    "depth": 65.9415
  },
  {
    "date": "2015-04",
    "year": 2015,
    "month": 4,
    "depth": 91.5694
  },
  {
    "date": "2015-05",
    "year": 2015,
    "month": 5,
    "depth": 89.8396
  },
  {
    "date": "2015-06",
    "year": 2015,
    "month": 6,
    "depth": 96.1021
  },
  {
    "date": "2015-07",
    "year": 2015,
    "month": 7,
    "depth": 79.4837
  },
  {
    "date": "2015-08",
    "year": 2015,
    "month": 8,
    "depth": 87.7638
  },
  {
    "date": "2015-09",
    "year": 2015,
    "month": 9,
    "depth": 100.6141
  },
  {
    "date": "2015-10",
    "year": 2015,
    "month": 10,
    "depth": 92.7902
  },
  {
    "date": "2015-11",
    "year": 2015,
    "month": 11,
    "depth": 110.5626
  },
  {
    "date": "2015-12",
    "year": 2015,
    "month": 12,
    "depth": 102.6715
  },
  {
    "date": "2016-01",
    "year": 2016,
    "month": 1,
    "depth": 81.8683
  },
  {
    "date": "2016-02",
    "year": 2016,
    "month": 2,
    "depth": 91.1653
  },
  {
    "date": "2016-03",
    "year": 2016,
    "month": 3,
    "depth": 46.394
  },
  {
    "date": "2016-04",
    "year": 2016,
    "month": 4,
    "depth": 33.1198
  },
  {
    "date": "2016-05",
    "year": 2016,
    "month": 5,
    "depth": 34.3907
  },
  {
    "date": "2016-06",
    "year": 2016,
    "month": 6,
    "depth": 37.9562
  },
  {
    "date": "2016-07",
    "year": 2016,
    "month": 7,
    "depth": 30.5712
  },
  {
    "date": "2016-08",
    "year": 2016,
    "month": 8,
    "depth": 26.2051
  },
  {
    "date": "2016-09",
    "year": 2016,
    "month": 9,
    "depth": 35.3371
  },
  {
    "date": "2016-10",
    "year": 2016,
    "month": 10,
    "depth": 35.3119
  },
  {
    "date": "2016-11",
    "year": 2016,
    "month": 11,
    "depth": 31.9254
  },
  {
    "date": "2016-12",
    "year": 2016,
    "month": 12,
    "depth": 39.0472
  },
  {
    "date": "2017-01",
    "year": 2017,
    "month": 1,
    "depth": 59.6533
  },
  {
    "date": "2017-02",
    "year": 2017,
    "month": 2,
    "depth": 58.2609
  },
  {
    "date": "2017-03",
    "year": 2017,
    "month": 3,
    "depth": 55.699
  },
  {
    "date": "2017-04",
    "year": 2017,
    "month": 4,
    "depth": 49.7977
  },
  {
    "date": "2017-05",
    "year": 2017,
    "month": 5,
    "depth": 50.1928
  },
  {
    "date": "2017-06",
    "year": 2017,
    "month": 6,
    "depth": 48.1687
  },
  {
    "date": "2017-07",
    "year": 2017,
    "month": 7,
    "depth": 45.5266
  },
  {
    "date": "2017-08",
    "year": 2017,
    "month": 8,
    "depth": 35.7405
  },
  {
    "date": "2017-09",
    "year": 2017,
    "month": 9,
    "depth": 19.277
  },
  {
    "date": "2017-10",
    "year": 2017,
    "month": 10,
    "depth": 21.9115
  },
  {
    "date": "2017-11",
    "year": 2017,
    "month": 11,
    "depth": 19.2068
  },
  {
    "date": "2017-12",
    "year": 2017,
    "month": 12,
    "depth": 15.758
  },
  {
    "date": "2018-01",
    "year": 2018,
    "month": 1,
    "depth": 37.5621
  },
  {
    "date": "2018-02",
    "year": 2018,
    "month": 2,
    "depth": 54.3049
  },
  {
    "date": "2018-03",
    "year": 2018,
    "month": 3,
    "depth": 38.5653
  },
  {
    "date": "2018-04",
    "year": 2018,
    "month": 4,
    "depth": 59.3761
  },
  {
    "date": "2018-05",
    "year": 2018,
    "month": 5,
    "depth": 72.3894
  },
  {
    "date": "2018-06",
    "year": 2018,
    "month": 6,
    "depth": 68.4053
  },
  {
    "date": "2018-07",
    "year": 2018,
    "month": 7,
    "depth": 55.1583
  },
  {
    "date": "2018-08",
    "year": 2018,
    "month": 8,
    "depth": 36.227
  },
  {
    "date": "2018-09",
    "year": 2018,
    "month": 9,
    "depth": 66.1114
  },
  {
    "date": "2018-10",
    "year": 2018,
    "month": 10,
    "depth": 88.1313
  },
  {
    "date": "2018-11",
    "year": 2018,
    "month": 11,
    "depth": 85.5845
  },
  {
    "date": "2018-12",
    "year": 2018,
    "month": 12,
    "depth": 73.9976
  },
  {
    "date": "2019-01",
    "year": 2019,
    "month": 1,
    "depth": 66.103
  },
  {
    "date": "2019-02",
    "year": 2019,
    "month": 2,
    "depth": 45.6416
  },
  {
    "date": "2019-03",
    "year": 2019,
    "month": 3,
    "depth": 73.8008
  },
  {
    "date": "2019-04",
    "year": 2019,
    "month": 4,
    "depth": 63.2396
  },
  {
    "date": "2019-05",
    "year": 2019,
    "month": 5,
    "depth": 46.7664
  },
  {
    "date": "2019-06",
    "year": 2019,
    "month": 6,
    "depth": 51.9407
  },
  {
    "date": "2019-07",
    "year": 2019,
    "month": 7,
    "depth": 46.1818
  },
  {
    "date": "2019-08",
    "year": 2019,
    "month": 8,
    "depth": 42.8964
  },
  {
    "date": "2019-09",
    "year": 2019,
    "month": 9,
    "depth": 36.0952
  },
  {
    "date": "2019-10",
    "year": 2019,
    "month": 10,
    "depth": 67.6594
  },
  {
    "date": "2019-11",
    "year": 2019,
    "month": 11,
    "depth": 77.4723
  },
  {
    "date": "2019-12",
    "year": 2019,
    "month": 12,
    "depth": 58.0352
  },
  {
    "date": "2020-01",
    "year": 2020,
    "month": 1,
    "depth": 78.2811
  },
  {
    "date": "2020-02",
    "year": 2020,
    "month": 2,
    "depth": 58.8856
  },
  {
    "date": "2020-03",
    "year": 2020,
    "month": 3,
    "depth": 52.167
  },
  {
    "date": "2020-04",
    "year": 2020,
    "month": 4,
    "depth": 51.0412
  },
  {
    "date": "2020-05",
    "year": 2020,
    "month": 5,
    "depth": 34.4816
  },
  {
    "date": "2020-06",
    "year": 2020,
    "month": 6,
    "depth": 31.7937
  },
  {
    "date": "2020-07",
    "year": 2020,
    "month": 7,
    "depth": 43.1949
  },
  {
    "date": "2020-08",
    "year": 2020,
    "month": 8,
    "depth": 38.397
  },
  {
    "date": "2020-09",
    "year": 2020,
    "month": 9,
    "depth": 13.1857
  },
  {
    "date": "2020-10",
    "year": 2020,
    "month": 10,
    "depth": 16.9947
  },
  {
    "date": "2020-11",
    "year": 2020,
    "month": 11,
    "depth": 17.3318
  },
  {
    "date": "2020-12",
    "year": 2020,
    "month": 12,
    "depth": 32.0863
  },
  {
    "date": "2021-01",
    "year": 2021,
    "month": 1,
    "depth": 49.4149
  },
  {
    "date": "2021-02",
    "year": 2021,
    "month": 2,
    "depth": 37.1111
  },
  {
    "date": "2021-03",
    "year": 2021,
    "month": 3,
    "depth": 45.668
  },
  {
    "date": "2021-04",
    "year": 2021,
    "month": 4,
    "depth": 62.233
  },
  {
    "date": "2021-05",
    "year": 2021,
    "month": 5,
    "depth": 59.1598
  },
  {
    "date": "2021-06",
    "year": 2021,
    "month": 6,
    "depth": 53.0966
  },
  {
    "date": "2021-07",
    "year": 2021,
    "month": 7,
    "depth": 39.924
  },
  {
    "date": "2021-08",
    "year": 2021,
    "month": 8,
    "depth": 38.7993
  },
  {
    "date": "2021-09",
    "year": 2021,
    "month": 9,
    "depth": 35.2399
  },
  {
    "date": "2021-10",
    "year": 2021,
    "month": 10,
    "depth": 23.7672
  },
  {
    "date": "2021-11",
    "year": 2021,
    "month": 11,
    "depth": 12.6242
  },
  {
    "date": "2021-12",
    "year": 2021,
    "month": 12,
    "depth": 26.7514
  },
  {
    "date": "2022-01",
    "year": 2022,
    "month": 1,
    "depth": 26.4901
  },
  {
    "date": "2022-02",
    "year": 2022,
    "month": 2,
    "depth": 61.6537
  },
  {
    "date": "2022-03",
    "year": 2022,
    "month": 3,
    "depth": 51.7363
  },
  {
    "date": "2022-04",
    "year": 2022,
    "month": 4,
    "depth": 38.4624
  },
  {
    "date": "2022-05",
    "year": 2022,
    "month": 5,
    "depth": 51.2
  },
  {
    "date": "2022-06",
    "year": 2022,
    "month": 6,
    "depth": 62.6213
  },
  {
    "date": "2022-07",
    "year": 2022,
    "month": 7,
    "depth": 55.7044
  },
  {
    "date": "2022-08",
    "year": 2022,
    "month": 8,
    "depth": 30.2282
  },
  {
    "date": "2022-09",
    "year": 2022,
    "month": 9,
    "depth": 13.7288
  },
  {
    "date": "2022-10",
    "year": 2022,
    "month": 10,
    "depth": 27.2957
  },
  {
    "date": "2022-11",
    "year": 2022,
    "month": 11,
    "depth": 20.6617
  },
  {
    "date": "2022-12",
    "year": 2022,
    "month": 12,
    "depth": 39.3546
  },
  {
    "date": "2023-01",
    "year": 2023,
    "month": 1,
    "depth": 63.047
  },
  {
    "date": "2023-02",
    "year": 2023,
    "month": 2,
    "depth": 59.2336
  },
  {
    "date": "2023-03",
    "year": 2023,
    "month": 3,
    "depth": 67.5038
  },
  {
    "date": "2023-04",
    "year": 2023,
    "month": 4,
    "depth": 78.9015
  },
  {
    "date": "2023-05",
    "year": 2023,
    "month": 5,
    "depth": 85.2444
  },
  {
    "date": "2023-06",
    "year": 2023,
    "month": 6,
    "depth": 94.6553
  },
  {
    "date": "2023-07",
    "year": 2023,
    "month": 7,
    "depth": 82.5768
  },
  {
    "date": "2023-08",
    "year": 2023,
    "month": 8,
    "depth": 77.0137
  },
  {
    "date": "2023-09",
    "year": 2023,
    "month": 9,
    "depth": 82.2988
  },
  {
    "date": "2023-10",
    "year": 2023,
    "month": 10,
    "depth": 75.8815
  },
  {
    "date": "2023-11",
    "year": 2023,
    "month": 11,
    "depth": 88.0965
  },
  {
    "date": "2023-12",
    "year": 2023,
    "month": 12,
    "depth": 92.2334
  },
  {
    "date": "2024-01",
    "year": 2024,
    "month": 1,
    "depth": 76.1037
  },
  {
    "date": "2024-02",
    "year": 2024,
    "month": 2,
    "depth": 44.0877
  },
  {
    "date": "2024-03",
    "year": 2024,
    "month": 3,
    "depth": 43.7235
  },
  {
    "date": "2024-04",
    "year": 2024,
    "month": 4,
    "depth": 39.6805
  },
  {
    "date": "2024-05",
    "year": 2024,
    "month": 5,
    "depth": 27.7877
  },
  {
    "date": "2024-06",
    "year": 2024,
    "month": 6,
    "depth": 52.584
  },
  {
    "date": "2024-07",
    "year": 2024,
    "month": 7,
    "depth": 53.6572
  },
  {
    "date": "2024-08",
    "year": 2024,
    "month": 8,
    "depth": 30.2181
  },
  {
    "date": "2024-09",
    "year": 2024,
    "month": 9,
    "depth": 40.4994
  },
  {
    "date": "2024-10",
    "year": 2024,
    "month": 10,
    "depth": 29.8903
  },
  {
    "date": "2024-11",
    "year": 2024,
    "month": 11,
    "depth": 28.4233
  },
  {
    "date": "2024-12",
    "year": 2024,
    "month": 12,
    "depth": 58.2716
  },
  {
    "date": "2025-01",
    "year": 2025,
    "month": 1,
    "depth": 35.4697
  },
  {
    "date": "2025-02",
    "year": 2025,
    "month": 2,
    "depth": 30.7514
  },
  {
    "date": "2025-03",
    "year": 2025,
    "month": 3,
    "depth": 60.5769
  },
  {
    "date": "2025-04",
    "year": 2025,
    "month": 4,
    "depth": 52.8872
  },
  {
    "date": "2025-05",
    "year": 2025,
    "month": 5,
    "depth": 42.6316
  },
  {
    "date": "2025-06",
    "year": 2025,
    "month": 6,
    "depth": 46.96
  },
  {
    "date": "2025-07",
    "year": 2025,
    "month": 7,
    "depth": 45.8132
  },
  {
    "date": "2025-08",
    "year": 2025,
    "month": 8,
    "depth": 31.7608
  },
  {
    "date": "2025-09",
    "year": 2025,
    "month": 9,
    "depth": 32.4173
  },
  {
    "date": "2025-10",
    "year": 2025,
    "month": 10,
    "depth": 24.4906
  },
  {
    "date": "2025-11",
    "year": 2025,
    "month": 11,
    "depth": 39.6209
  }
];
