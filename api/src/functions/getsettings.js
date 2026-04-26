const { app } = require('@azure/functions');

app.http('getsettings', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log('KeyVault reference validation function invoked');
        const settings = {
            SYNTH_KV_SECRET_1: process.env.SYNTH_KV_SECRET_1 || 'NOT_SET',
            SYNTH_KV_SECRET_2: process.env.SYNTH_KV_SECRET_2 || 'NOT_SET'
        };
        return { 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(settings) 
        };
    }
});