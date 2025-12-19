export const initialEquipmentData = [
    {
      id: 'PMP-001A',
      name: 'Crude Oil Export Pump A',
      type: 'Pump',
      status: 'Critical',
      location: 'Zone 1',
      metrics: {
        vibration: 12.5,
        temperature: 85,
        pressure: 1200,
      },
      prediction: {
        timeToFailure: '3 days',
        confidence: '95%',
        reason: 'Anomalous high-frequency vibrations detected. Bearing wear likely.',
      },
      historicalData: [
        { day: -30, vibration: 4.1 },
        { day: -25, vibration: 4.3 },
        { day: -20, vibration: 4.2 },
        { day: -15, vibration: 5.8 },
        { day: -10, vibration: 7.9 },
        { day: -5, vibration: 10.2 },
        { day: 0, vibration: 12.5 },
      ],
    },
    // остальные объекты…
  ];
  