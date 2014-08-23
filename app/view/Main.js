Ext.define('MyApp.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'west',
        xtype: 'panel',
        title: 'west',
        width: 150
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Center Tab 1',
            listeners: {
                afterrender: function(p) {
                    var _ = require('underscore');
                    var tmpl = _.template('<h1>Hello, <%= name %><h1>')
                    p.body.update(tmpl({ name: 'John' }));
                }
            }
        }]
    }]
});