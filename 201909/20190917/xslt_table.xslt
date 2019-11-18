<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head></head>
      <body>
        <table border="1">
              <tr>
                <td>상품</td>
                <td>종류</td>
                <td>수량</td>
              </tr>
          <!--추가된 부분-->
          <xsl:for-each select="products_list/product">
            <tr>
              <td>
                <xsl:value-of select="name"/>
              </td>
              <td>
                <xsl:value-of select="category"/>
              </td>
              <td>
                <xsl:value-of select="amount"/>
              </td>
            </tr>
          </xsl:for-each>
          
            </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>